import { SalaService } from './../../../domain/sala/sala_service';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';
//import * as moment from 'moment';

import { of } from "rxjs/observable/of";
import * as moment from 'moment';
import 'moment/min/locales';
import { CalendarioService } from '../../../domain/calendario/calendario_service';

moment.locale('pt-br');

@Component({
  selector: 'page-add-evento',
  templateUrl: 'add-evento.html',
})
export class AddEventoPage {

  public sala = [];
  public selectOptions;
  public descricao;
  public salas;
  public inicio;
  public fim;

  event = {
    startTime: new Date().toISOString(),
    endTime: new Date().toISOString(),
    allDay: false
  };

  constructor(
    public navCtrl: NavController,
    public calendarioService: CalendarioService,
    public salaService: SalaService,
    public loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
    private navParams: NavParams,
    public viewCtrl: ViewController) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;

    this.selectOptions = {
      title: 'Escolha uma sala',
      subTitle: 'É possível selecionar multiplas salas',
      mode: 'md'
    };
  }

  ionViewWillEnter() {

    let loading = this.loadingCtrl.create({
      content: 'Buscando...'
    });
    loading.present();

    this.salaService
      .listarSalas()
      .then(user => {
        this.sala = user.data;
        console.log(this.sala);
        loading.dismiss();
      })
      .catch(error => {
        console.log(error);
      })
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  adicionarEvento() {
    let alert = this._alertCtrl.create({
      title: 'Acionar Evento',
      message: 'Deseja adicionar esse Evento?',
      buttons: [
        {
          text: 'Não',
          role: 'Não'
        },
        {
          text: 'Sim',
          role: 'Sim',
          handler: () => {
            let loading = this.loadingCtrl.create({
              content: 'Carregando...'
            });
            loading.present();

            this.inicio = this.inicio.split('Z')[0];
            this.inicio = this.inicio.split('T')[0] + ' ' + this.inicio.split('T')[1];

            this.fim = this.fim.split('Z')[0];
            this.fim = this.fim.split('T')[0] + ' ' + this.fim.split('T')[1];

            this.calendarioService
            .adicionarEvento(this.descricao, this.inicio, this.fim, this.salas)
              .then(user => {
                if(user.msg === "Evento inserido com sucesso") {
                  this.viewCtrl.dismiss();
                  let alert = this._alertCtrl.create({
                    title: 'adicionado com Sucesso!',
                    subTitle: 'Evento adicionado!'
                  });
                  alert.present();
                  loading.dismiss();
                } else if(user.msg === "Agenda indisponível. Um evento já foi cadastrado no período selecionado") {
                  let alert = this._alertCtrl.create({
                    title: 'Erro!',
                    subTitle: 'Evento já cadastrado no horario selecionado',
                    buttons: ['Ok']
                  });
                  alert.present();
                  loading.dismiss();
                } else {
                  let alert = this._alertCtrl.create({
                    title: 'Erro não esperado!',
                    subTitle: 'Entre em contato com o Igor',
                    buttons: ['Ok']
                  });
                  alert.present();
                  loading.dismiss();
                }
              })
              .catch(error => {
                let alert = this._alertCtrl.create({
                  title: 'Erro não esperado!',
                  subTitle: 'Entre em contato com o Igor',
                  buttons: ['Ok']
                });
                alert.present();
                loading.dismiss();
              })
          }
        }
      ]
    });
    alert.present();
  }

  blockDay($event) {
    console.log($event)
  }
}

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
  minDate = new Date().toISOString();


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


            this.calendarioService
            .adicionarEvento(this.descricao, this.inicio, this.fim, this.salas)
              .then(user => {
                console.log(user);
              })
              .catch(error => {
                let alert = this._alertCtrl.create({
                  title: 'Erro não esperado!',
                  subTitle: 'Entre em contato com o Igor',
                  buttons: ['Ok']
                });
                alert.present();
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

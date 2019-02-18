import { SalaPage } from './../sala';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { SalaService } from '../../../domain/sala/sala_service';

@Component({
  selector: 'page-add-sala',
  templateUrl: 'add-sala.html',
})
export class AddSalaPage {

  public nome

  constructor(
    public navCtrl: NavController,
    public salaService: SalaService,
    private _alertCtrl: AlertController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    document.querySelector(".tabbar").setAttribute("style", "z-index:-1");
    console.log('ionViewDidLoad AddSalaPage');
  }

  addSala(){
    let alert = this._alertCtrl.create({
      title: 'Adicionar Sala!',
      message: 'Dados inseridos corretamente?',
      buttons: [
        {
          text: 'Não',
          role: 'Não'
        },
        {
          text: 'Sim',
          role: 'Sim',
          handler: () => {
            this.salaService
              .adicionandoSala(this.nome)
              .then(user => {
                if(user.msg === "Sala inserida com sucesso") {
                  this.navCtrl.setRoot(SalaPage);
                } else {
                  this._alertCtrl
                    .create({
                      title: "Erro inesperado, constatar o Igor",
                      buttons: [{ text: "Ok" }]
                    })
                    .present();
                }
              })
              .catch(error => {
                console.log(error);
              })
          }
        }
      ]
    });
    alert.present();
  }
}

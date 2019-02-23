import { EditSalaPage } from './edit-sala/edit-sala';
import { SalaService } from './../../domain/sala/sala_service';
import { AddSalaPage } from './add-sala/add-sala';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-sala',
  templateUrl: 'sala.html',
})
export class SalaPage {

  public roomList = [];

  constructor(
    public navCtrl: NavController,
    public salaService: SalaService,
    public loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
    public navParams: NavParams
  ) {
  }

  ionViewWillEnter() {
    document.querySelector(".tabbar").setAttribute("style", "z-index:1");
    let loading = this.loadingCtrl.create({
      content: 'Buscando...'
    });
    loading.present();

    this.salaService
      .listarSalas()
      .then(user => {
        this.roomList = user.data;
        console.log(this.roomList);
        loading.dismiss();
      })
      .catch(error => {
        console.log(error);
      })
  }

  addSala() {
    this.navCtrl.push(AddSalaPage);
  }

  editar(id) {
    this.navCtrl.push(EditSalaPage, id);
  }

  excluir(id) {
    let alert = this._alertCtrl.create({
      title: 'Excluir Sala!',
      message: 'Deseja excluir está sala?',
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
              .excluirSala(id)
              .then(user => {
                console.log(user);
                this.navCtrl.setRoot(this.navCtrl.getActive().component);
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

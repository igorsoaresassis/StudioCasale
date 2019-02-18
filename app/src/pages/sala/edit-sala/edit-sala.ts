import { SalaPage } from './../sala';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { SalaService } from '../../../domain/sala/sala_service';

@Component({
  selector: 'page-edit-sala',
  templateUrl: 'edit-sala.html',
})
export class EditSalaPage {

  public id;
  public nome;
  public nomeDesatualizado;

  constructor(
    public navCtrl: NavController,
    public salaService: SalaService,
    private _alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams
  ) {
    this.id = this.navParams.data;
  }

  ionViewWillEnter() {
    document.querySelector(".tabbar").setAttribute("style", "z-index:-1");
    let loading = this.loadingCtrl.create({
      content: 'Buscando...'
    });
    loading.present();

    this.salaService
      .buscarSala(this.id)
      .then(user => {
        this.nome = user.data.roomName;
        this.nomeDesatualizado = user.data.roomName;
        loading.dismiss();
      })
      .catch(error => {
        console.log(error);
      })
  }

  updateSala() {
    if(this.nome !== this.nomeDesatualizado) {

      let alert = this._alertCtrl.create({
        title: 'Editar Sala!',
        message: 'Tem certeza que deseja editar essa Sala?',
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
                .editarSala(this.id, this.nome)
                .then(user => {
                  if(user.msg === "Dados atualizados com sucesso") {
                    this._alertCtrl
                      .create({
                        title: "Atualizado com Sucesso.",
                        buttons: [
                          {
                            text: "Ok",
                            handler: () => {
                              this.navCtrl.setRoot(SalaPage);
                            }
                          }]
                      })
                      .present();
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
                  this._alertCtrl
                    .create({
                      title: "Erro inesperado, constatar o Igor",
                      buttons: [{ text: "Ok" }]
                    })
                    .present();
                })
            }
          }
        ]
      });
      alert.present();
    } else {
      this._alertCtrl
        .create({
          title: "Nenhuma alteração feita!",
          buttons: [{ text: "Ok" }]
        })
        .present();
    }
  }

}

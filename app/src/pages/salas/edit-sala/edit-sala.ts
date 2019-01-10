import { SalasPage } from './../salas';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
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
    public navParams: NavParams
  ) {
    this.id = this.navParams.data;
  }

  ionViewWillEnter() {
    this.salaService
      .buscarSala(this.id)
      .then(user => {
        this.nome = user.data.roomName;
        this.nomeDesatualizado = user.data.roomName;
      })
      .catch(error => {
        console.log(error);
      })
  }

  updateSala() {
    if(this.nome !== this.nomeDesatualizado) {
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
                      this.navCtrl.setRoot(SalasPage);
                    }
                  }]
              })
              .present();
          } else {
            this._alertCtrl
              .create({
                title: "Erro inesperado, constatar o desenvolvedor",
                buttons: [{ text: "Ok" }]
              })
              .present();
          }
        })
        .catch(error => {
          console.log(error);
        })
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

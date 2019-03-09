import {Component} from '@angular/core';
import {NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';
import {SalaService} from '../../../domain/sala/sala_service';
import { showErrorAlert } from '../../../app/util';

@Component({
    selector: 'page-edit-sala',
    templateUrl: 'edit-sala.html',
})
export class EditSalaPage {

    public pageTitle = 'Inserir Sala';

    public room = {
        roomId: null,
        roomName: null
    };

    constructor(
        public navCtrl: NavController,
        public salaService: SalaService,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public navParams: NavParams
    ) {
        this.room = Object.assign({}, this.navParams.data);

        if (this.room.roomId) {
            this.pageTitle = 'Editar Sala'
        }
    }

    saveRoom() {
        let alert = this.alertCtrl.create({ title: 'Sucesso', buttons: [{text: "Ok"}] });
        let loader = this.loadingCtrl.create({content: 'Salvando...'});
        loader.present();
        let saveName = this.room.roomName;

        if (this.room.roomId) {
          if(this.room.roomName === "") {
            loader.dismiss();
            showErrorAlert(this.alertCtrl, 'Campo está vazio!');
          } else if(saveName === this.room.roomName) {
            loader.dismiss();
            showErrorAlert(this.alertCtrl, 'Campo não editado!');
          } else {
            this.salaService
                .update(this.room.roomId, this.room.roomName)
                .then(response => {
                    alert.setMessage(response.msg);

                    loader.dismiss();
                    alert.present();
                }).catch(() => {
                    alert.setTitle('Erro');
                    alert.setMessage('Falha ao atualizar sala.');

                    loader.dismiss();
                    alert.present();
                })
          }
        } else {
          if(this.room.roomName === undefined) {
            loader.dismiss();
            showErrorAlert(this.alertCtrl, 'Campo está vazio');
          } else {
              this.salaService
                  .insert(this.room.roomName)
                  .then(response => {
                      if (!response.hasError) {
                          this.room.roomId = response.data.roomId;
                      }

                      alert.setTitle(response.msg);

                      loader.dismiss();
                      alert.present();
                  }).catch(() => {
                      alert.setTitle('Erro');
                      alert.setMessage('Falha ao inserir sala.');

                      loader.dismiss();
                      alert.present();
                  })
          }
        }
    }
}

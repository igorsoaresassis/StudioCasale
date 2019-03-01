import {SalaPage} from './../sala';
import {Component} from '@angular/core';
import {NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';
import {SalaService} from '../../../domain/sala/sala_service';

@Component({
    selector: 'page-edit-sala',
    templateUrl: 'edit-sala.html',
})
export class EditSalaPage {

    room = {
        roomId: null,
        roomName: null
    };

    constructor(
        public navCtrl: NavController,
        public salaService: SalaService,
        private _alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public navParams: NavParams
    ) {
        this.room = Object.assign({}, this.navParams.data);
    }

    saveRoom() {
        let saving = this.loadingCtrl.create({content: 'Salvando...'});
        saving.present();

        if (this.room.roomId) {

            this.salaService.editarSala(this.room.roomId, this.room.roomName).then(response => {
                saving.dismiss();

                this._alertCtrl.create({
                    title: response.msg,
                    buttons: [{text: "Ok"}]
                })
                    .present();
            })
                .catch(error => {
                    saving.dismiss();

                    this._alertCtrl.create({
                        title: "Falha ao atualizar sala.",
                        buttons: [{text: "Ok"}]
                    })
                        .present();
                })
        } else {
            this.salaService.adicionarSala(this.room.roomName).then(response => {
                saving.dismiss();

                if (!response.hasError) {
                    this.room.roomId = response.data.roomId;
                }

                this._alertCtrl.create({
                    title: response.msg,
                    buttons: [{text: "Ok"}]
                })
                    .present();
            })
                .catch(error => {
                    saving.dismiss();

                    this._alertCtrl.create({
                        title: "Falha ao inserir sala.",
                        buttons: [{text: "Ok"}]
                    })
                        .present();
                })
        }
    }
}

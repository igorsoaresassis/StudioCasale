import {EditSalaPage} from './edit-sala/edit-sala';
import {SalaService} from './../../domain/sala/sala_service';
import {Component} from '@angular/core';
import {NavController, AlertController, LoadingController} from 'ionic-angular';
import { showErrorAlert, validateToken } from "../../app/util";

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
        public alertCtrl: AlertController
    ) {
    }

    ionViewWillEnter() {
        this.loadRooms();
        document.querySelector(".tabbar").setAttribute("style", "z-index:1");
    }

    loadRooms() {
        let loader = this.loadingCtrl.create({ content: 'Carregando...' });
        loader.present();

        document.querySelector(".tabbar").setAttribute("style", "z-index:1");

        this.salaService
            .list()
            .then(response => {
                if (response.hasError) {
                    loader.dismiss();

                    if (!validateToken(response.errorCode, this.navCtrl)) {
                        return;
                    }

                    showErrorAlert(this.alertCtrl, response.msg);
                    return;
                }

                this.roomList = response.data;
                loader.dismiss();
            })
            .catch(() => {
                loader.dismiss();
                showErrorAlert(this.alertCtrl, 'Falha ao carregar salas.');
            })
    }

    addRoom() {
        this.navCtrl.push(EditSalaPage);
    }

    editRoom(room) {
        this.navCtrl.push(EditSalaPage, room);
    }

    removeRoomDialog(roomId) {
        const buttons = [
            {
                text: 'Não',
                role: 'Não'
            },
            {
                text: 'Sim',
                role: 'Sim',
                handler: () => { this.removeRoom(roomId) }
            }
        ];

        let alert = this.alertCtrl.create({ title: 'Exclusão de Sala', buttons: buttons });
        alert.setMessage('Tem certeza que deseja excluir a sala?');
        alert.present();
    }

    removeRoom(roomId) {
        let loader = this.loadingCtrl.create({ content: 'Processando...' });
        loader.present();

        this.salaService
            .remove(roomId)
            .then((response) => {
                if (response.hasError) {
                    loader.dismiss();
                    showErrorAlert(this.alertCtrl, response.msg);
                    return;
                }

                const buttons = [
                    {
                        text: 'Ok',
                        handler: () => { this.navCtrl.setRoot(this.navCtrl.getActive().component) }
                    }
                ];

                let alert = this.alertCtrl.create({ title: 'Sucesso', buttons: buttons });
                alert.setMessage(response.msg);

                loader.dismiss();
                alert.present();
            })
            .catch(() => {
                loader.dismiss();
                showErrorAlert(this.alertCtrl, 'Falha ao remover sala.');
            })
    }
}

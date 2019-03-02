import {EditSalaPage} from './edit-sala/edit-sala';
import {SalaService} from './../../domain/sala/sala_service';
import {Component} from '@angular/core';
import {NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';

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
    }

    loadRooms() {
        let loader = this.loadingCtrl.create({ content: 'Carregando...' });
        loader.present();

        document.querySelector(".tabbar").setAttribute("style", "z-index:1");

        this.salaService
            .listarSalas()
            .then(response => {
                this.roomList = response.data;
                loader.dismiss();
            })
            .catch(error => {
                let alert = this.alertCtrl.create({ title: 'Erro', buttons: [{ text: "Ok" }] });
                alert.setMessage('Falha ao carregar salas.');
                loader.dismiss();
                alert.present();
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
            .excluirSala(roomId)
            .then((response) => {
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
                let alert = this.alertCtrl.create({ title: 'Erro' });
                alert.setMessage('Falha ao remover sala.');

                loader.dismiss();
                alert.present();
            })
    }
}

import {EditAtendentePage} from './edit-atendente/edit-atendente';
import {UsuarioService} from './../../domain/usuario/usuario_service';
import {Component} from '@angular/core';
import {NavController, AlertController, LoadingController} from 'ionic-angular';
import { showErrorAlert } from "../../app/util";

@Component({
    selector: 'page-atendente',
    templateUrl: 'atendente.html',
})
export class AtendentePage {

    public userList = [];

    constructor(
        public navCtrl: NavController,
        public usuarioService: UsuarioService,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController
    ) {
    }

    ionViewWillEnter() {
        this.loadUsers();
    }

    loadUsers() {
        let loader = this.loadingCtrl.create({ content: 'Carregando...' });
        loader.present();

        document.querySelector(".tabbar").setAttribute("style", "z-index:1");

        this.usuarioService
            .list()
            .then(response => {
                if (response.data.hasError) {
                    loader.dismiss();
                    showErrorAlert(this.alertCtrl, response.data.msg);
                    return;
                }

                this.userList = response.data.filter(user => !user.userAdmin);
                loader.dismiss();
            })
            .catch(() => {
                loader.dismiss();
                showErrorAlert(this.alertCtrl, 'Falha ao carregar atendentes.');
            })
    }

    addUser() {
        this.navCtrl.push(EditAtendentePage);
    }

    editUser(user) {
        this.navCtrl.push(EditAtendentePage, user);
    }

    inactivateDialog(userId) {
        const buttons = [
            {
                text: 'Não',
                role: 'Não'
            },
            {
                text: 'Sim',
                role: 'Sim',
                handler: () => { this.inactivateUser(userId) }
            }
        ];

        let alert = this.alertCtrl.create({ title: 'Inativação de Atendente', buttons: buttons });
        alert.setMessage('Tem certeza que deseja inativar o atendente?');
        alert.present();
    }

    inactivateUser(userId) {
        let loader = this.loadingCtrl.create({ content: 'Processando...' });
        loader.present();

        this.usuarioService
            .inactivateUser(userId)
            .then(response => {
                if (response.data.hasError) {
                    loader.dismiss();
                    showErrorAlert(this.alertCtrl, response.data.msg);
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
                showErrorAlert(this.alertCtrl, 'Falha ao inativar atendente.');
            })
    }

    activateDialog(userId) {
        const buttons = [
            {
                text: 'Não',
                role: 'Não'
            },
            {
                text: 'Sim',
                role: 'Sim',
                handler: () => { this.activateUser(userId) }
            }
        ];

        let alert = this.alertCtrl.create({ title: 'Ativação de Atendente', buttons: buttons });
        alert.setMessage('Tem certeza que deseja ativar o atendente?');
        alert.present();
    }

    activateUser(userId) {
        let loader = this.loadingCtrl.create({ content: 'Processando...' });
        loader.present();

        this.usuarioService
            .activateUser(userId)
            .then(response => {
                if (response.data.hasError) {
                    loader.dismiss();
                    showErrorAlert(this.alertCtrl, response.data.msg);
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
                showErrorAlert(this.alertCtrl, 'Falha ao ativar atendente.');
            })
    }
}

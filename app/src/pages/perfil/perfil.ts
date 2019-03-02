import {LoginPage} from './../login/login';
import {Component} from '@angular/core';
import {NavController, LoadingController, AlertController} from 'ionic-angular';
import {UsuarioService} from '../../domain/usuario/usuario_service';

@Component({
    selector: 'page-perfil',
    templateUrl: 'perfil.html',
})
export class PerfilPage {

    public user = {
        userId: null,
        userName: null,
        userEmail: null
    };

    public currentPassword;
    public newPassword;
    public passwordConfirmation;

    constructor(
        public navCtrl: NavController,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public usuarioService: UsuarioService) {

        this.user.userId = localStorage.getItem('userId');
        this.user.userName = localStorage.getItem('userName');
        this.user.userEmail = localStorage.getItem('userEmail');
    }

    changePasswordDialog() {
        let alert = this.alertCtrl.create({ title: 'Erro', buttons: [{ text: "Ok" }] });

        if (!this.currentPassword || !this.newPassword || !this.passwordConfirmation) {
            alert.setMessage('Preencha todos os campos para alterar sua senha.');
            alert.present();
            return;
        }

        if (this.newPassword !== this.passwordConfirmation) {
            alert.setMessage('A senha e a confirmação devem ser idênticas.');
            alert.present();
            return;
        }

        const buttons = [
            {
                text: 'Não',
                role: 'Não'
            },
            {
                text: 'Sim',
                role: 'Sim',
                handler: () => { this.changePassword() }
            }
        ];

        alert = this.alertCtrl.create({ title: 'Alteração de Senha', buttons: buttons });
        alert.setMessage('Tem certeza que deseja alterar sua senha?');
        alert.present();
    }

    changePassword() {
        let alert = this.alertCtrl.create({ title: 'Sucesso', buttons: [{text: "Ok"}] });
        let loader = this.loadingCtrl.create({ content: 'Processando...' });
        loader.present();

        this.usuarioService
            .changePassword(this.user.userId, this.newPassword, this.currentPassword)
            .then(response => {
                if (!response.data.hasError) {
                    this.currentPassword = null;
                    this.newPassword = null;
                    this.passwordConfirmation = null;
                }

                alert.setMessage(response.msg);

                loader.dismiss();
                alert.present();
            }).catch(() => {
                alert.setTitle('Erro');
                alert.setMessage('Falha ao alterar senha.');

                loader.dismiss();
                alert.present();
            })
    }

    logoutDialog() {
        const buttons = [
            {
                text: 'Não',
                role: 'Não'
            },
            {
                text: 'Sim',
                role: 'Sim',
                handler: () => { this.logout() }
            }
        ];

        let alert = this.alertCtrl.create({ title: 'Logout', buttons: buttons });
        alert.setMessage('Tem certeza que deseja sair do sistema?');
        alert.present();
    }

    logout() {
        document.querySelector(".tabbar").setAttribute("style", "z-index:-1");
        localStorage.clear();
        this.navCtrl.setRoot(LoginPage);
    }
}

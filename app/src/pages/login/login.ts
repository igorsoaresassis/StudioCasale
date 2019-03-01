import {LoginService} from './../../domain/login/login_service';
import {Component} from '@angular/core';
import {NavController, NavParams, AlertController, App, LoadingController, Events} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    public email: string;
    public password: string;
    public token;

    constructor(
        public navCtrl: NavController,
        public appCtrl: App,
        private loginService: LoginService,
        public events: Events,
        private _alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public navParams: NavParams
    ) {
    }

    login() {
        let loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        this.loginService
            .efetuaLogin(this.email, this.password)
            .then(user => {
                if (user === "Erro ao fazer login") {
                    this._alertCtrl
                        .create({
                            title: "Problema no login",
                            subTitle: "Email ou senha inválidos. Tente Novamente!",
                            buttons: [{text: "Ok"}]
                        })
                        .present();
                    loading.dismiss();
                } else {
                    localStorage.setItem('userStatus', user.data.userAdmin)
                    localStorage.setItem('idUsuario', user.data.userId)
                    this.navCtrl.setRoot(TabsPage);
                    loading.dismiss();
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

}

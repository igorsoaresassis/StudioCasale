import {LoginService} from './../../domain/login/login_service';
import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, AlertController, App, LoadingController, Events, Content} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import { MyApp } from '../../app/app.component';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild(Content) content: Content;

    public email: string;
    public password: string;
    public token;

    constructor(
        public navCtrl: NavController,
        public loginService: LoginService,
        public events: Events,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
    ) {
      localStorage.clear();
    }

    login() {
        let loader = this.loadingCtrl.create({ content: 'Processando...' });
        loader.present();

        this.loginService
            .efetuaLogin(this.email, this.password)
            .then(response => {
                if (!response.data.hasError) {
                    localStorage.setItem('userId', response.data.userId);
                    localStorage.setItem('userName', response.data.userName);
                    localStorage.setItem('userEmail', response.data.userEmail);
                    localStorage.setItem('userAdmin', response.data.userAdmin);
                    loader.dismiss();

                    this.events.publish('user', response.data.userAdmin);

                    this.navCtrl.setRoot(this.navCtrl.getActive().component)
                    // this.navCtrl.setRoot(MyApp);
                    return;
                }

                let alert = this.alertCtrl.create({ title: 'Erro', buttons: [{ text: "Ok" }] });
                alert.setMessage(response.data.msg);

                loader.dismiss();
                alert.present();
            })
            .catch(() => {
                let alert = this.alertCtrl.create({ title: 'Erro', buttons: [{ text: "Ok" }] });
                alert.setMessage('Falha ao realizar login.');
                loader.dismiss();
                alert.present();
            });
    }
}

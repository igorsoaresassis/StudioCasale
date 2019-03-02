import {Component} from '@angular/core';
import {NavController, LoadingController, Events, AlertController} from 'ionic-angular';
import {LoginPage} from '../login/login';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    public user = {
        userId: null,
        userName: null,
        userEmail: null
    };

    constructor(
        public navCtrl: NavController,
        public events: Events,
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController
    ) {
        this.user.userId = localStorage.getItem('userId');
        this.user.userName = localStorage.getItem('userName');
        this.user.userEmail = localStorage.getItem('userEmail');

        //this.events.publish('calendar', 'true');
    }

    getFirstName(name) {
        if (!name) {
            return '';
        }
        
        return name.split(' ')[0];
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

import { UsuarioService } from './../../domain/usuario/usuario_service';
import { validateToken, showErrorAlert } from './../../app/util';
import {Component} from '@angular/core';
import {NavController, LoadingController, Events, AlertController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {logout} from '../../app/util';
import { Network } from '@ionic-native/network/ngx';

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
    public statusConexao;

    constructor(
        public navCtrl: NavController,
        public events: Events,
        public loadingCtrl: LoadingController,
        public usuarioService: UsuarioService,
        public network: Network,
        public alertCtrl: AlertController
    ) {
        this.user.userId = localStorage.getItem('userId');
        this.user.userName = localStorage.getItem('userName');
        this.user.userEmail = localStorage.getItem('userEmail');

        //this.events.publish('calendar', 'true');

    }

    ionViewWillEnter() {
      this.statusToken();
    }

    // ionViewDidEnter() {
    //   this.network.onDisconnect().subscribe(() => {
    //       console.log('network was disconnected :-(');
    //       this.statusConexao = "desconectado";
    //   });
    //   this.network.onConnect().subscribe(() => {
    //       console.log('network connected!');
    //       this.statusConexao = "conectado";
    //       showErrorAlert(this.alertCtrl, 'Falha na Internet, Verifique sua conexão!');
    //   });
    // }

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
                handler: () => { logout(this.navCtrl) }
            }
        ];

        let alert = this.alertCtrl.create({ title: 'Logout', buttons: buttons });
        alert.setMessage('Tem certeza que deseja sair do sistema?');
        alert.present();
    }

    statusToken() {
      this.usuarioService
      .list()
      .then(response => {
          if (response.hasError) {

              if (!validateToken(response.errorCode, this.navCtrl)) {
                logout(this.navCtrl);
                return;
              }

          }
      })
      .catch(() => {
          showErrorAlert(this.alertCtrl, 'Falha ao carregar App.');
      })
    }
}

import {SalaService} from './../../../domain/sala/sala_service';
import {UsuarioService} from './../../../domain/usuario/usuario_service';
import {Component} from '@angular/core';
import {NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';
import { showAlert, showErrorAlert} from "../../../app/util";

@Component({
    selector: 'page-edit-atendente',
    templateUrl: 'edit-atendente.html',
})
export class EditAtendentePage {

    public pageTitle = 'Inserir Atendente';
    public selectOptions;

    public user = {
        userId: null,
        userName: null,
        userEmail: null,
        userPassword: null,
        userRooms: []
    };

    public roomList = [];

    constructor(
        public navCtrl: NavController,
        public salaService: SalaService,
        private usuarioService: UsuarioService,
        private alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public navParams: NavParams
    ) {
        this.user = Object.assign({}, this.navParams.data);

        if (this.user.userId) {
            this.pageTitle = 'Editar Atendente'
        }

        this.selectOptions = {
            title: 'Escolha as salas',
            subTitle: 'É possível selecionar multiplas salas',
            mode: 'md'
        };
    }

    ionViewWillEnter() {
        this.loadRooms();
    }

    loadRooms() {
        let loader = this.loadingCtrl.create({ content: 'Carregando...' });
        loader.present();

        document.querySelector(".tabbar").setAttribute("style", "z-index:1");

        this.salaService
            .list()
            .then(response => {
                this.roomList = response.data;
                loader.dismiss();
            })
            .catch(() => {
                loader.dismiss();
                showErrorAlert(this.alertCtrl, 'Falha ao carregar salas.');
            })
    }

    saveUser() {
        let loader = this.loadingCtrl.create({content: 'Salvando...'});
        loader.present();

        if (this.user.userId) {
            if(this.user.userPassword === null) {
              loader.dismiss();
              showErrorAlert(this.alertCtrl, 'Campo Senha está vazio');
            } else {
              this.usuarioService
                  .update(this.user)
                  .then(response => {
                      if (response.data.hasError) {
                          loader.dismiss();
                          showErrorAlert(this.alertCtrl, response.data.msg);
                          return;
                      }

                      this.user.userPassword = null;

                      loader.dismiss();
                      showAlert(this.alertCtrl, response.msg);
                  }).catch(() => {
                      loader.dismiss();
                      showErrorAlert(this.alertCtrl, 'Falha ao atualizar usuário.');
                  })
              }
        } else {
            if(this.user.userName === undefined ||  this.user.userEmail === undefined || this.user.userPassword === undefined || this.user.userRooms === undefined) {
              loader.dismiss();
              showErrorAlert(this.alertCtrl, 'Verifique se algum campo está vazio!');
            } else {
              this.usuarioService
                  .insert(this.user.userName, this.user.userEmail, this.user.userPassword, this.user.userRooms)
                  .then(response => {
                      if (response.data.hasError) {
                          loader.dismiss();
                          showErrorAlert(this.alertCtrl, response.data.msg);
                          return;
                      }

                      this.user.userId = response.data.userId;
                      this.user.userPassword = null;

                      loader.dismiss();
                      showAlert(this.alertCtrl, response.msg);
                  }).catch(() => {
                      loader.dismiss();
                      showErrorAlert(this.alertCtrl, 'Falha ao inserir usuário.');
                  })
          }
        }
    }
}

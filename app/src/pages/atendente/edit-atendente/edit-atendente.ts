import {SalaService} from './../../../domain/sala/sala_service';
import {UsuarioService} from './../../../domain/usuario/usuario_service';
import {Component} from '@angular/core';
import {NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';

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

    saveUser() {
        let alert = this.alertCtrl.create({ title: 'Sucesso', buttons: [{text: "Ok"}] });
        let loader = this.loadingCtrl.create({content: 'Salvando...'});
        loader.present();

        if (this.user.userId) {
            this.usuarioService
                .editartUsuario(this.user)
                .then(response => {
                    alert.setMessage(response.msg);

                    this.user.userPassword = null;

                    loader.dismiss();
                    alert.present();
                }).catch(() => {
                    alert.setTitle('Erro');
                    alert.setMessage('Falha ao atualizar usuário.');

                    loader.dismiss();
                    alert.present();
                })
        } else {
            this.usuarioService
                .adicionarUsuario(this.user.userName, this.user.userEmail, this.user.userPassword, this.user.userRooms)
                .then(response => {
                    if (!response.hasError) {
                        this.user.userId = response.data.userId;
                        this.user.userPassword = null;
                    }

                    alert.setMessage(response.msg);

                    loader.dismiss();
                    alert.present();
                }).catch(() => {
                    alert.setTitle('Erro');
                    alert.setMessage('Falha ao inserir usuário.');

                    loader.dismiss();
                    alert.present();
                })
        }
    }
}

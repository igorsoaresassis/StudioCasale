import {UsuarioService} from './../../../domain/usuario/usuario_service';
import {Component} from '@angular/core';
import {NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';
import {AtendentePage} from '../atendente';
import {SalaService} from '../../../domain/sala/sala_service';

@Component({
    selector: 'page-add-atendente',
    templateUrl: 'add-atendente.html',
})
export class AddAtendentePage {

    public sala = [];
    public selectOptions;

    public id;
    public nome;
    public email;
    public senha;
    public salas;

    constructor(
        public navCtrl: NavController,
        private usuarioService: UsuarioService,
        public salaService: SalaService,
        public loadingCtrl: LoadingController,
        private _alertCtrl: AlertController,
        public navParams: NavParams) {
        if (this.navParams.data) {
            this.id = this.navParams.data;
        }

        this.selectOptions = {
            title: 'Escolha uma sala',
            subTitle: 'É possível selecionar multiplas salas',
            mode: 'md'
        };
    }

    ionViewWillEnter() {
        document.querySelector(".tabbar").setAttribute("style", "z-index:-1");
        let loading = this.loadingCtrl.create({
            content: 'Buscando...'
        });
        loading.present();

        this.salaService
            .listarSalas()
            .then(user => {
                this.sala = user.data;
                console.log(this.sala);
                loading.dismiss();
            })
            .catch(error => {
                console.log(error);
            })
    }

    adicionarAtendente() {
        let alert = this._alertCtrl.create({
            title: 'Adicionar Atendente!',
            message: 'Dados inseridos corretamente?',
            buttons: [
                {
                    text: 'Não',
                    role: 'Não'
                },
                {
                    text: 'Sim',
                    role: 'Sim',
                    handler: () => {
                        this.usuarioService
                            .adicionandoUsuario(this.nome, this.email, this.senha, this.salas)
                            .then(user => {
                                if (user.msg === "Atendente inserido com sucesso") {
                                    this.navCtrl.setRoot(AtendentePage);
                                } else {
                                    this._alertCtrl
                                        .create({
                                            title: "Erro inesperado, constatar o Igor",
                                            buttons: [{text: "Ok"}]
                                        })
                                        .present();
                                }
                            })
                            .catch(error => {
                                console.log(error);
                            })
                    }
                }
            ]
        });
        alert.present();
    }
}

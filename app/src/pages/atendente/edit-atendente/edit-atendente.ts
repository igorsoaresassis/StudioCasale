import {NovaSenhaAtendentePage} from './../nova-senha-atendente/nova-senha-atendente';
import {SalaService} from './../../../domain/sala/sala_service';
import {UsuarioService} from './../../../domain/usuario/usuario_service';
import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';
import {AtendentePage} from '../atendente';

@Component({
    selector: 'page-edit-atendente',
    templateUrl: 'edit-atendente.html',
})
export class EditAtendentePage implements OnInit {

    public selectOptions;

    public id;
    public nome;
    public email;
    public nomeDesatualizado;
    public emailDesatualizado;
    public sala = [];
    public salas;

    constructor(
        public navCtrl: NavController,
        public salaService: SalaService,
        private usuarioService: UsuarioService,
        private _alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public navParams: NavParams
    ) {
        this.id = this.navParams.data;

        this.selectOptions = {
            title: 'Escolha uma sala',
            subTitle: 'É possível selecionar multiplas salas',
            mode: 'md'
        };
    }

    ngOnInit() {

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

    ionViewWillEnter() {
        let loading = this.loadingCtrl.create({
            content: 'Buscando...'
        });
        loading.present();

        this.usuarioService
            .buscarAtendente(this.id)
            .then(user => {
                this.nome = user.data.userName;
                this.nomeDesatualizado = user.data.userName;
                this.email = user.data.userEmail;
                this.emailDesatualizado = user.data.userEmail;
                loading.dismiss();
            })
            .catch(error => {
                console.log(error);
            })
    }

    updateAtendente() {
        if (this.nome !== this.nomeDesatualizado || this.email !== this.emailDesatualizado) {
            let alert = this._alertCtrl.create({
                title: 'Editar Atendente!',
                message: 'Deseja editar este Atendente?',
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
                                .editartUsuario(this.id, this.nome, this.email, this.salas)
                                .then(user => {
                                    if (user.msg === "Dados atualizados com sucesso") {
                                        this._alertCtrl
                                            .create({
                                                title: "Atendente atualizado com Sucesso.",
                                                buttons: [
                                                    {
                                                        text: "Ok",
                                                        handler: () => {
                                                            this.navCtrl.setRoot(AtendentePage);
                                                        }
                                                    }]
                                            })
                                            .present();
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
                                    this._alertCtrl
                                        .create({
                                            title: "Erro inesperado, constatar o Igor",
                                            buttons: [{text: "Ok"}]
                                        })
                                        .present();
                                })
                        }
                    }
                ]
            });
            alert.present();
        } else {
            this._alertCtrl
                .create({
                    title: "Nenhuma alteração feita!",
                    buttons: [{text: "Ok"}]
                })
                .present();
        }
    }

    novaSenha() {
        this.navCtrl.push(NovaSenhaAtendentePage, this.id)
    }

}

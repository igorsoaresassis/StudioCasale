import {EditAtendentePage} from './edit-atendente/edit-atendente';
import {UsuarioService} from './../../domain/usuario/usuario_service';
import {AddAtendentePage} from './add-atendente/add-atendente';
import {Component} from '@angular/core';
import {NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';

@Component({
    selector: 'page-atendente',
    templateUrl: 'atendente.html',
})
export class AtendentePage {

    public userList = [];
    public inativado: boolean = true;

    constructor(
        public navCtrl: NavController,
        private usuarioService: UsuarioService,
        private _alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public navParams: NavParams
    ) {
    }

    ionViewWillEnter() {
        document.querySelector(".tabbar").setAttribute("style", "z-index:1");
        let loading = this.loadingCtrl.create({
            content: 'Buscando...'
        });
        loading.present();

        this.usuarioService
            .listarUsuarios()
            .then(response => {
                this.userList = response.data.filter(user => !user.userAdmin);
                loading.dismiss();
            })
            .catch(error => {
                console.log(error);
            })
    }

    addAtendente() {
        this.navCtrl.push(AddAtendentePage);
    }

    editar(id) {
        this.navCtrl.push(EditAtendentePage, id);
    }

    inativar(id) {
        let alert = this._alertCtrl.create({
            title: 'Inativar o Atendente!',
            message: 'Deseja inativar este Atendente?',
            buttons: [
                {
                    text: 'Não',
                    role: 'Não'
                },
                {
                    text: 'Sim',
                    role: 'Sim',
                    handler: () => {
                        let loading = this.loadingCtrl.create({
                            content: 'Carregando...'
                        });
                        loading.present();

                        this.usuarioService
                            .inativarUsuario(id)
                            .then(user => {
                                if (user.msg === "Usuário inativado com sucesso") {
                                    this.navCtrl.setRoot(this.navCtrl.getActive().component);
                                    this.inativado === true;
                                    loading.dismiss();
                                } else {
                                    let alert = this._alertCtrl.create({
                                        title: 'Erro não esperado!',
                                        subTitle: 'Entre em contato com o Igor',
                                        buttons: ['Ok']
                                    });
                                    alert.present();
                                    this.inativado === false;
                                }
                            })
                            .catch(error => {
                                let alert = this._alertCtrl.create({
                                    title: 'Erro não esperado!',
                                    subTitle: 'Entre em contato com o Igor',
                                    buttons: ['Ok']
                                });
                                alert.present();
                            })
                    }
                }
            ]
        });
        alert.present();
    }

    ativar(id) {
        let alert = this._alertCtrl.create({
            title: 'Ativar o Atendente!',
            message: 'Deseja ativar este atendente?',
            buttons: [
                {
                    text: 'Não',
                    role: 'Não'
                },
                {
                    text: 'Sim',
                    role: 'Sim',
                    handler: () => {
                        let loading = this.loadingCtrl.create({
                            content: 'Carregando...'
                        });
                        loading.present();

                        this.usuarioService
                            .ativarUsuario(id)
                            .then(user => {
                                if (user.msg === "Usuário ativado com sucesso") {
                                    this.navCtrl.setRoot(this.navCtrl.getActive().component);
                                    this.inativado === false;
                                    loading.dismiss();
                                } else {
                                    let alert = this._alertCtrl.create({
                                        title: 'Erro não esperado!',
                                        subTitle: 'Entre em contato com o Igor',
                                        buttons: ['Ok']
                                    });
                                    alert.present();
                                    this.inativado === true;
                                }
                            })
                            .catch(error => {
                                let alert = this._alertCtrl.create({
                                    title: 'Erro nã esperado!',
                                    subTitle: 'Entre em contato com o Igor',
                                    buttons: ['Ok']
                                });
                                alert.present();
                            })
                    }
                }
            ]
        });
        alert.present();
    }
}

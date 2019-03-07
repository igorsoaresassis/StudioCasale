import { SalaService } from "./../../../domain/sala/sala_service";
import { Component } from "@angular/core";
import {
    NavController,
    NavParams,
    ViewController,
    LoadingController,
    AlertController
} from "ionic-angular";

import { of } from "rxjs/observable/of";
import * as moment from "moment";
import "moment/min/locales";
import { CalendarioService } from "../../../domain/calendario/calendario_service";
import { showAlert, showErrorAlert} from "../../../app/util";

moment.locale("pt-br");

@Component({
    selector: "page-edit-evento",
    templateUrl: "edit-evento.html"
})
export class EditEventoPage {
    public pageTitle = "Inserir Evento";
    public sala = [];
    public selectOptions;
    public descricao;
    public salas;
    public inicio;
    public fim;
    public eventId;

    event = {
        startTime: new Date().toISOString(),
        endTime: new Date().toISOString(),
        allDay: false,
        sala: ""
    };

    constructor(
        public navCtrl: NavController,
        public calendarioService: CalendarioService,
        public salaService: SalaService,
        public loadingCtrl: LoadingController,
        private alertCtrl: AlertController,
        private navParams: NavParams,
        public viewCtrl: ViewController
    ) {
        // this.event = this.navParams.get("event");
        // let preselectedDate = moment(this.navParams.get("selectedDay")).format();
        // this.event.startTime = preselectedDate;
        // this.event.endTime = preselectedDate;

        this.event = Object.assign({}, this.navParams.data);

        if (this.event.sala) {
            this.pageTitle = "Editar Atendente";
        }

        this.selectOptions = {
            title: "Escolha uma sala",
            mode: "md"
        };
    }

    ionViewWillEnter() {
        this.loadRoons();
    }

    loadRoons() {
        let loading = this.loadingCtrl.create({
            content: "Buscando..."
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
            });
    }

    cancel() {
        this.viewCtrl.dismiss();
    }

    saveUser() {
        let loader = this.loadingCtrl.create({ content: "Salvando..." });
        loader.present();

        if (this.event.sala) {

            this.inicio = this.inicio.split("Z")[0];
            this.inicio =
                this.inicio.split("T")[0] + " " + this.inicio.split("T")[1];

            this.fim = this.fim.split("Z")[0];
            this.fim = this.fim.split("T")[0] + " " + this.fim.split("T")[1];

            this.calendarioService
                .editarEvento(
                    this.eventId,
                    this.descricao,
                    this.inicio,
                    this.fim,
                    this.salas
                )
                .then(user => {
                    console.log(user);

                    // if(user.msg === "Evento inserido com sucesso") {
                    //   this.viewCtrl.dismiss();
                    //   let alert = this._alertCtrl.create({
                    //     title: 'adicionado com Sucesso!',
                    //     subTitle: 'Evento adicionado!'
                    //   });
                    //   alert.present();
                    //   loading.dismiss();
                    // } else if(user.msg === "Agenda indisponível. Um evento já foi cadastrado no período selecionado") {
                    //   let alert = this._alertCtrl.create({
                    //     title: 'Erro!',
                    //     subTitle: 'Evento já cadastrado no horario selecionado',
                    //     buttons: ['Ok']
                    //   });
                    //   alert.present();
                    //   loading.dismiss();
                    // } else {
                    //   let alert = this._alertCtrl.create({
                    //     title: 'Erro não esperado!',
                    //     subTitle: 'Entre em contato com o Igor',
                    //     buttons: ['Ok']
                    //   });
                    //   alert.present();
                    //   loading.dismiss();
                    // }
                    loader.dismiss();
                    showAlert(this.alertCtrl, user.msg);
                })
                .catch(error => {
                  loader.dismiss();
                  showErrorAlert(this.alertCtrl, 'Falha ao atualizar usuário.');
                });
        } else {

            this.inicio = this.inicio.split("Z")[0];
            this.inicio =
                this.inicio.split("T")[0] + " " + this.inicio.split("T")[1];

            this.fim = this.fim.split("Z")[0];
            this.fim = this.fim.split("T")[0] + " " + this.fim.split("T")[1];

            this.calendarioService
                .adicionarEvento(
                    this.descricao,
                    this.inicio,
                    this.fim,
                    this.salas
                )
                .then(user => {
                    if (user.msg === "Evento inserido com sucesso") {
                        this.viewCtrl.dismiss();
                        let alert = this.alertCtrl.create({
                            title: "adicionado com Sucesso!",
                            subTitle: "Evento adicionado!"
                        });
                        alert.present();
                        loader.dismiss();
                    } else if (user.msg === "Agenda indisponível. Um evento já foi cadastrado no período selecionado") {
                        let alert = this.alertCtrl.create({
                            title: "Erro!",
                            subTitle: "Evento já cadastrado no horario selecionado",
                            buttons: ["Ok"]
                        });
                        alert.present();
                        loader.dismiss();
                    } else {
                        let alert = this.alertCtrl.create({
                            title: "Erro não esperado!",
                            subTitle: "Entre em contato com o Igor",
                            buttons: ["Ok"]
                        });
                        alert.present();
                        loader.dismiss();
                    }
                })
                .catch(error => {
                    let alert = this.alertCtrl.create({
                        title: "Erro não esperado!",
                        subTitle: "Entre em contato com o Igor",
                        buttons: ["Ok"]
                    });
                    alert.present();
                    loader.dismiss();
                });
        }
    }
}

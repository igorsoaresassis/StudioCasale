import { Component } from "@angular/core";
import {NavController, NavParams, LoadingController, AlertController, Events} from "ionic-angular";

import { SalaService } from "./../../../domain/sala/sala_service";
import { UsuarioService } from "./../../../domain/usuario/usuario_service";
import { CalendarioService } from "../../../domain/calendario/calendario_service";

import * as moment from "moment";
import {getLoggedUser, showAlert, showErrorAlert} from "../../../app/util";

@Component({
    selector: "page-edit-evento",
    templateUrl: "edit-evento.html"
})
export class EditEventoPage {
    public pageTitle = "Inserir Evento";
    public roomSelectOptions;
    public userSelectOptions;
    public roomList = [];
    public userList = [];

    public event = {
        eventId: null,
        title: null,
        startTime: null,
        endTime: null,
        roomId: null,
        userId: null
    };

    public loggedUser = getLoggedUser();

    constructor(
        public navCtrl: NavController,
        public calendarioService: CalendarioService,
        public salaService: SalaService,
        public usuarioService: UsuarioService,
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController,
        public navParams: NavParams,
        public events: Events,
    ) {
        if (this.navParams.data.eventId) {
            const data = this.navParams.data;

            this.event.eventId = data.eventId;
            this.event.title = data.title;
            this.event.startTime = moment(data.startTime).format();
            this.event.endTime = moment(data.endTime).format();
            this.event.roomId = data.roomId;
            this.event.userId = data.userId;
        } else {
            const startMoment = moment().minutes(0).seconds(0);
            const endMoment = startMoment.clone().add(1, 'h');

            this.event.eventId = null;
            this.event.title = null;
            this.event.startTime = startMoment.format();
            this.event.endTime = endMoment.format();
            this.event.roomId = null;
            this.event.userId = this.loggedUser.userId;
        }

        if (this.event.eventId) {
            this.pageTitle = "Editar Evento";
        }

        this.roomSelectOptions = {
            title: "Selecione a Sala",
            mode: "md"
        };

        this.userSelectOptions = {
            title: "Selecione o Atendente",
            mode: "md"
        };
    }

    ionViewWillEnter() {
        this.loadSelectData();
    }

    loadSelectData() {
        let loader = this.loadingCtrl.create({ content: 'Carregando...' });
        loader.present();

        document.querySelector(".tabbar").setAttribute("style", "z-index:-1");

        this.salaService
            .list()
            .then(response => {
                this.roomList = response.data;

                if (this.loggedUser.userAdmin) {
                    this.loadUsers(loader);
                } else {
                    loader.dismiss();
                }
            })
            .catch(() => {
                loader.dismiss();
                showErrorAlert(this.alertCtrl, 'Falha ao carregar salas.');
            })
    }

    loadUsers(loader) {
        this.usuarioService
            .list()
            .then(response => {
                this.userList = response.data;
                loader.dismiss();
            })
            .catch(() => {
                loader.dismiss();
                showErrorAlert(this.alertCtrl, 'Falha ao carregar atendentes.');
            })
    }

    saveEvent() {
        let loader = this.loadingCtrl.create({content: 'Processando...'});
        loader.present();

        let momentStartDate = moment(this.event.startTime);
        let momentEndDate = moment(this.event.endTime);

        let eventId = this.event.eventId;
        let description = this.event.title;
        let startDate = momentStartDate.format('YYYY-MM-DD HH:mm');
        let endDate = momentEndDate.format('YYYY-MM-DD HH:mm');
        let roomId = this.event.roomId;
        let userId = this.event.userId;

        if (momentStartDate.isSameOrAfter(momentEndDate)) {
            loader.dismiss();
            showErrorAlert(this.alertCtrl, 'A data inicial deve ser anterior à data final.');
            return;
        }

        if (!description || !startDate || !endDate || !roomId) {
            loader.dismiss();
            showErrorAlert(this.alertCtrl, 'Por favor preencha todos os campos.');
            return;
        }

        if (this.event.eventId) {
            this.calendarioService
                .update(eventId, description, startDate, endDate, roomId, userId)
                .then(response => {
                    if (response.hasError) {
                        loader.dismiss();
                        showErrorAlert(this.alertCtrl, response.msg);
                        return;
                    }

                    loader.dismiss();
                    this.events.publish('calendar:load-events', true);
                    showAlert(this.alertCtrl, response.msg);
                }).catch(() => {
                    loader.dismiss();
                    showErrorAlert(this.alertCtrl, 'Falha ao atualizar evento.');
                });
        } else {
            this.calendarioService
                .insert(description, startDate, endDate, roomId, userId)
                .then(response => {
                    if (response.hasError) {
                        loader.dismiss();
                        showErrorAlert(this.alertCtrl, response.msg);
                        return;
                    }

                    this.event.eventId = response.data.eventId;

                    loader.dismiss();
                    this.events.publish('calendar:load-events', true);
                    showAlert(this.alertCtrl, response.msg)
                }).catch(() => {
                    loader.dismiss();
                    showErrorAlert(this.alertCtrl, 'Falha ao inserir evento.');
                });
        }
    }
}

import { Component } from "@angular/core";
import { NavController, NavParams, LoadingController, AlertController } from "ionic-angular";

import { SalaService } from "./../../../domain/sala/sala_service";
import { CalendarioService } from "../../../domain/calendario/calendario_service";

import * as moment from "moment";
import { showAlert, showErrorAlert} from "../../../app/util";

@Component({
    selector: "page-edit-evento",
    templateUrl: "edit-evento.html"
})
export class EditEventoPage {
    public pageTitle = "Inserir Evento";
    public selectOptions;
    public roomList = [];

    public event = {
        eventId: null,
        title: null,
        startTime: null,
        endTime: null,
        roomId: null
    };

    constructor(
        public navCtrl: NavController,
        public calendarioService: CalendarioService,
        public salaService: SalaService,
        public loadingCtrl: LoadingController,
        public  alertCtrl: AlertController,
        public  navParams: NavParams,
    ) {
        if (this.navParams.data.eventId) {
            const data = this.navParams.data;

            this.event.eventId = data.eventId;
            this.event.title = data.title;
            this.event.startTime = moment(data.startTime).format();
            this.event.endTime = moment(data.endTime).format();
            this.event.roomId = data.roomId;
        } else {
            const startMoment = moment().minutes(0).seconds(0);
            const endMoment = startMoment.clone().add(1, 'h');

            this.event.eventId = null;
            this.event.title = null;
            this.event.startTime = startMoment.format();
            this.event.endTime = endMoment.format();
            this.event.roomId = null;
        }

        console.log(this.event);

        if (this.event.eventId) {
            this.pageTitle = "Editar Evento";
        }

        this.selectOptions = {
            title: "Selecione a Sala",
            mode: "md"
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
                .update(eventId, description, startDate, endDate, roomId)
                .then(response => {
                    if (response.hasError) {
                        loader.dismiss();
                        showErrorAlert(this.alertCtrl, response.msg);
                        return;
                    }

                    loader.dismiss();
                    showAlert(this.alertCtrl, response.msg)
                }).catch(() => {
                    loader.dismiss();
                    showErrorAlert(this.alertCtrl, 'Falha ao atualizar evento.');
                });
        } else {
            this.calendarioService
                .insert(description, startDate, endDate, roomId)
                .then(response => {
                    if (response.hasError) {
                        loader.dismiss();
                        showErrorAlert(this.alertCtrl, response.msg);
                        return;
                    }

                    this.event.eventId = response.data.eventId;

                    loader.dismiss();
                    showAlert(this.alertCtrl, response.msg)
                }).catch(() => {
                    loader.dismiss();
                    showErrorAlert(this.alertCtrl, 'Falha ao inserir evento.');
                });
        }
    }
}

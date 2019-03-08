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
    pageTitle = "Inserir Evento";
    roomList = [];

    event = {
        eventId: null,
        title: null,
        startDate: new Date().toISOString(),
        startTime: new Date().toISOString(),
        endDate: new Date().toISOString(),
        endTime: new Date().toISOString(),
        roomId: null
    };

    selectOptions = {
        title: "Escolha uma sala",
        mode: "md"
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
        this.event = Object.assign({}, this.navParams.data);

        console.log(this.event);
        if (this.event.eventId) {
            this.pageTitle = "Editar Evento";
        }
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

    }
}

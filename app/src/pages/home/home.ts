import {Component} from '@angular/core';
import {Network} from '@ionic-native/network/ngx';
import { NavController, LoadingController, Events, AlertController, App } from 'ionic-angular';
import {UsuarioService} from './../../domain/usuario/usuario_service';
import {CalendarioService} from '../../domain/calendario/calendario_service';
import * as moment from "moment";
import {validateToken, showErrorAlert, getLoggedUser, logout} from './../../app/util';
import { CalendarioPage } from '../calendario/calendario';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    public user = getLoggedUser();

    public valueMes;
    public valueSemana;
    public valueDia;

    constructor(
        public navCtrl: NavController,
        private appCtrl: App,
        public events: Events,
        public loadingCtrl: LoadingController,
        public usuarioService: UsuarioService,
        public calendarioService: CalendarioService,
        public network: Network,
        public alertCtrl: AlertController
    ) {
    }

    ionViewWillEnter() {
        this.statusToken();
        this.searchEvents();
    }

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
                handler: () => {
                    logout(this.navCtrl)
                }
            }
        ];

        let alert = this.alertCtrl.create({title: 'Logout', buttons: buttons});
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

    searchEvents() {
        let loader = this.loadingCtrl.create({
            content: 'Carregando...'
        });

        loader.present();

        const startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
        const endOfMonth   = moment().endOf('month').format('YYYY-MM-DD');

        const startOfWeek = moment().startOf('week');
        const endOfWeek = moment().endOf('week');

        const startDay = moment().startOf('day');
        const endOfDay = moment().endOf('day');

        const filter = `startDate:${ startOfMonth }|endDate:${ endOfMonth }|userId:${ this.user.userId }`;

        this.calendarioService.list(filter).then(response => {
            const eventsMonth = response.data;

            const eventsWeek = eventsMonth.filter((event) => {
                return moment(event.eventStartDate).isBetween(startOfWeek, endOfWeek)
                    || moment(event.eventEndDate).isBetween(startOfWeek, endOfWeek);
            });

            const eventsDay = eventsMonth.filter((event) => {
                return moment(event.eventStartDate).isBetween(startDay, endOfDay)
                    || moment(event.eventEndDate).isBetween(startDay, endOfDay);
            });

            this.valueMes = eventsMonth.length;
            this.valueSemana = eventsWeek.length;
            this.valueDia = eventsDay.length;

            loader.dismiss();
        }).catch(() => {
          loader.dismiss();
        });
    }

    getEventMessage(eventCount) {
        return eventCount > 1 ? 'atendimentos agendados' : 'atendimento agendado';
    }

    openCalendar(status) {
        // this.appCtrl.getRootNav().getActiveChildNav().select(1);
        // this.appCtrl.getRootNav().getActiveChildNav().getByIndex(1).setRoot(CalendarioPage, status);
    }
}

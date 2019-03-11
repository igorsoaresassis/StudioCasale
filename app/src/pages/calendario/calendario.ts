import {EditEventoPage} from './edit-evento/edit-evento';
import {Component} from '@angular/core';
import {
    NavController,
    LoadingController,
    Events,
    AlertController, PopoverController, ViewController
} from 'ionic-angular';

import * as moment from "moment";

import {CalendarComponent} from 'ionic2-calendar/calendar';
import {MonthViewComponent} from 'ionic2-calendar/monthview';
import {WeekViewComponent} from 'ionic2-calendar/weekview';
import {DayViewComponent} from 'ionic2-calendar/dayview';

import {CalendarioService} from '../../domain/calendario/calendario_service';
import { showErrorAlert, getLoggedUser } from "../../app/util";

@Component({
    selector: 'page-calendario',
    templateUrl: 'calendario.html'
})
export class CalendarioPage {
    eventList = [];
    eventSource = [];
    viewTitle;

    calendarModes = [
        { key: 'month', value: 'Mês' },
        { key: 'week', value: 'Semana' },
        { key: 'day', value: 'Dia' },
    ];

    calendar = {
        mode: this.calendarModes[0].key,
        currentDate: new Date()
    };

    loadedData = {
        start: null,
        end: null,
        lastLoad: null
    };

    loggedUser = getLoggedUser();

    constructor(public navCtrl: NavController,
                public loadingCtrl: LoadingController,
                public calendarioService: CalendarioService,
                public alertCtrl: AlertController,
                public events: Events,
                public popoverCtrl: PopoverController) {

        this.events.subscribe('calendar:change-mode', (mode) => { this.changeCalendarMode(mode) });
        this.events.subscribe('calendar:load-events', (silent) => { this.loadEvents(true, silent) });
    }

    ionViewWillEnter() {
        if (this.loadedData.lastLoad && this.loadedData.lastLoad.diff(moment(), 'minutes') > 15) {
            this.loadEvents(true);
        }
        document.querySelector(".tabbar").setAttribute("style", "z-index:1");
    }

    loadEvents(forceReload = false, silent = false, startRange = null, endRange = null, currentDate = null) {
        if (!forceReload && this.isPeriodLoaded(startRange, endRange)) {
            this.eventSource = [...this.eventList];
            return;
        }

        let loader = this.loadingCtrl.create({
            content: 'Carregando...'
        });

        if (!silent) {
            loader.present();
        }

        const currentMoment = moment(currentDate ? currentDate : this.calendar.currentDate);
        const startOfMonth = currentMoment.clone().startOf('month').subtract(2, 'months');
        const endOfMonth   = currentMoment.clone().endOf('month').add(2, 'months');

        const filter = `startDate:${ startOfMonth.format('YYYY-MM-DD') }|endDate:${ endOfMonth.format('YYYY-MM-DD')  }`;

        this.calendarioService.list(filter).then(response => {
            console.log(response);

            this.eventList = response.data.map((event) => {
                return {
                    eventId: event.eventId,
                    title: event.eventDescription,
                    startTime: new Date(event.eventStartDate),
                    endTime: new Date(event.eventEndDate),
                    allDay: false,
                    roomId: event.roomId,
                    roomName: event.roomName,
                    userId: event.userId,
                    userName: event.userName
                }
            });

            this.eventSource = [...this.eventList];
            this.loadedData.start = startOfMonth;
            this.loadedData.end = endOfMonth;
            this.loadedData.lastLoad = moment();

            loader.dismiss();
        }).catch(() => {
            loader.dismiss();
            showErrorAlert(this.alertCtrl, 'Falha ao carregar eventos.');
        });
    }

    isPeriodLoaded(startRange, endRange) {
        if (!startRange || !endRange || !this.loadedData.start || !this.loadedData.end) {
            return false;
        }

        return startRange.isSameOrAfter(this.loadedData.start) && endRange.isSameOrBefore(this.loadedData.end);
    }

    onRangeChanged(event) {
        let date = event.startTime.getDate();
        let month = (event.startTime.getMonth() + (date !== 1 ? 1 : 0)) % 12;
        let currentDate = moment().month(month);
        let startDate = moment(event.startTime);
        let endDate = moment(event.endTime);

        this.loadEvents(false, false, startDate, endDate, currentDate);
    }

    onViewTitleChanged(title) {
        this.viewTitle = title;
    }

    changeCalendarMode(mode) {
        this.calendar.mode = mode;
    }

    goToday() {
        this.calendar.currentDate = new Date();
    }

    addEvent() {
        this.navCtrl.push(EditEventoPage);
    }

    editEvent(event) {
        if (this.loggedUser.userId !== event.userId && !this.loggedUser.userAdmin) {
            return;
        }

        this.navCtrl.push(EditEventoPage, event);
    }

    excluirEvent(id) {
        let alert = this.alertCtrl.create({
            title: 'Excluir Evento!',
            message: 'Deseja excluir este evento?',
            buttons: [
                {
                    text: 'Não',
                    role: 'Não'
                },
                {
                    text: 'Sim',
                    role: 'Sim',
                    handler: () => {
                        this.calendarioService
                            .remove(id)
                            .then(user => {
                                console.log(user);
                                this.navCtrl.setRoot(this.navCtrl.getActive().component);
                            })
                            .catch(error => {
                                let alert = this.alertCtrl.create({
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

    presentPopover($event) {
        let popover = this.popoverCtrl.create(CalendarPopover);
        popover.present({ ev: $event});
    }
}

@Component({
    template: `
    <ion-list class="calendar-popover">
        <ion-list-header>Modo de Visualização</ion-list-header>
        <button ion-item (click)="changeCalendarMode('month')">Mês</button>
        <button ion-item (click)="changeCalendarMode('week')">Semana</button>
        <button ion-item (click)="changeCalendarMode('day')">Dia</button>
    </ion-list>
  `
})
export class CalendarPopover {
    constructor(public viewCtrl: ViewController, public events: Events) {
    }

    changeCalendarMode(mode) {
        this.events.publish('calendar:change-mode', mode);
        this.viewCtrl.dismiss();
    }
}

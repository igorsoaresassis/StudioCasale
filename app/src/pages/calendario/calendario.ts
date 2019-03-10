import {EditEventoPage} from './edit-evento/edit-evento';
import {Component} from '@angular/core';
import {
    NavController,
    LoadingController,
    Events,
    AlertController, PopoverController, ViewController
} from 'ionic-angular';

import {CalendarComponent} from 'ionic2-calendar/calendar';
import {MonthViewComponent} from 'ionic2-calendar/monthview';
import {WeekViewComponent} from 'ionic2-calendar/weekview';
import {DayViewComponent} from 'ionic2-calendar/dayview';

import {CalendarioService} from '../../domain/calendario/calendario_service';

@Component({
    selector: 'page-calendario',
    templateUrl: 'calendario.html'
})
export class CalendarioPage {
    eventList = [];
    viewTitle;

    calendarModes = [
        { key: 'month', value: 'Mês' },
        { key: 'week', value: 'Semana' },
        { key: 'day', value: 'Dia' },
    ];

    calendar = {
        mode: this.calendarModes[1].key,
        currentDate: new Date()
    };

    constructor(public navCtrl: NavController,
                public loadingCtrl: LoadingController,
                public calendarioService: CalendarioService,
                public alertCtrl: AlertController,
                public events: Events,
                public popoverCtrl: PopoverController) {

        this.events.subscribe('calendar:change-mode', (mode) => { this.changeCalendarMode(mode) })
    }

    async ionViewWillEnter() {
        let loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });

        loading.present();

        this.calendarioService.list().then(response => {
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
                    userId: event.userId
                }
            });

            loading.dismiss();
        });
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

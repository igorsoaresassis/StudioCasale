import {EditEventoPage} from './edit-evento/edit-evento';
import {Component, ChangeDetectionStrategy} from '@angular/core';
import {
    NavController,
    ActionSheetController,
    ModalController,
    LoadingController,
    Events,
    AlertController
} from 'ionic-angular';

import {CalendarComponent} from 'ionic2-calendar/calendar';
import {MonthViewComponent} from 'ionic2-calendar/monthview';
import {WeekViewComponent} from 'ionic2-calendar/weekview';
import {DayViewComponent} from 'ionic2-calendar/dayview';

import localePtBr from '@angular/common/locales/pt-PT';
import {registerLocaleData} from '@angular/common';
import {SalaService} from '../../domain/sala/sala_service';
import {CalendarioService} from '../../domain/calendario/calendario_service';

//registerLocaleData(localePtBr);

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'page-calendario',
    templateUrl: 'calendario.html'
})
export class CalendarioPage {

    public sala = [];
    selectedDay = new Date()
    selectedObject
    eventSource = []
    viewTitle;
    isToday: boolean;
    calendarModes = [
        {key: 'month', value: 'Mês'},
        {key: 'week', value: 'Semana'},
        {key: 'day', value: 'Dia'},
    ]

    calendar = {
        mode: this.calendarModes[0].key,
        currentDate: new Date()
    };

    constructor(public navCtrl: NavController,
                public loadingCtrl: LoadingController,
                public salaService: SalaService,
                public calendarioService: CalendarioService,
                private _alertCtrl: AlertController,
                public events: Events,
                private actionSheetCtrl: ActionSheetController,
                private modalCtrl: ModalController) {

        // this.markDisabled(new Date(2017, 12, 25))
    }

    async ionViewWillEnter() {
        let loading = this.loadingCtrl.create({
            content: 'Buscando...'
        });

        loading.present();

        this.salaService.listarSalas().then(response => {
            this.sala = response.data;

            this.calendarioService.buscarEvento().then(response => {
                this.eventSource = response.data.map((event) => {
                    return {
                        title: event.eventDescription,
                        startTime: new Date(event.eventStartDate),
                        endTime: new Date(event.eventEndDate),
                        allDay: false,
                        sala: event.sala
                    }
                });

                loading.dismiss();
            })
        });


        // this.events.subscribe('calendar',(user) =>{
        //   this.salaService
        //     .listarSalas()
        //     .then(user => {
        //       this.sala = user.data;
        //       loading.dismiss();
        //     })
        //     .catch(error => {
        //       console.log(error);
        //     })
        // });
    }

    onViewTitleChanged(title) {
        this.viewTitle = title;
    }

    changeMode(mode) {
        this.calendar.mode = mode;
    }

    today() {
        this.calendar.currentDate = new Date();
    }

    onTimeSelected(ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
        this.selectedObject = ev
        // this.openActionSheet(ev)
    }

    onCurrentDateChanged(event: Date) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();

        this.selectedDay = event

    }

    onRangeChanged(ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    }

    markDisabled = (date: Date) => {
        var current = new Date();
        current.setHours(0, 0, 0);
        return (date < current);
    };

    openActionSheet(event) {
        console.log('opening');
        let actionsheet = this.actionSheetCtrl.create({
            title: "Choose Option",
            buttons: [
                {
                    text: 'Block Date',
                    handler: () => {
                        console.log("Block Date Clicked: ", event);
                        let d = event.selectedTime;
                        //d.setHours(0, 0, 0);
                    }
                },
                {
                    text: 'Meet Up With',
                    handler: function () {
                        console.log("Meet Up With Clicked");
                    }
                }
            ]
        });
        actionsheet.present();
    }

    addEvent() {
        let modal = this.modalCtrl.create(EditEventoPage, {selectedDay: this.selectedDay});
        modal.present();
    }

    onEventSelected(event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
        let modal = this.modalCtrl.create(EditEventoPage, {event: event});
        modal.present();
    }

    excluirEvent(id) {
        let alert = this._alertCtrl.create({
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
                            .excluirEvento(id)
                            .then(user => {
                                console.log(user);
                                this.navCtrl.setRoot(this.navCtrl.getActive().component);
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

    onOptionSelected($event: any) {
        console.log($event)
        this.calendar.mode = $event
    }

    onSelected($event: any) {
        console.log($event)
        this.calendar.mode = $event
    }

}

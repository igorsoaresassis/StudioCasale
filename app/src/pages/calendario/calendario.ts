import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController, ActionSheetController, ModalController, LoadingController } from 'ionic-angular';
import { AddEventoPage } from './add-evento/add-evento';

import { CalendarComponent } from 'ionic2-calendar/calendar';
import { MonthViewComponent } from 'ionic2-calendar/monthview';
import { WeekViewComponent } from 'ionic2-calendar/weekview';
import { DayViewComponent } from 'ionic2-calendar/dayview';

import localePtBr from '@angular/common/locales/pt-PT';
import { registerLocaleData } from '@angular/common';
import { SalaService } from '../../domain/sala/sala_service';

registerLocaleData(localePtBr);

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
    { key: 'month', value: 'Mês' },
    { key: 'week', value: 'Semana' },
    { key: 'day', value: 'Dia' },
  ]

  calendar = {
    mode: this.calendarModes[0].key,
    currentDate: new Date()
  }; // these are the variable used by the calendar.

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public salaService: SalaService,
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController) {

    // this.markDisabled(new Date(2017, 12, 25))
  }

  ionViewWillEnter() {
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


  loadEvents() {
    // this.eventSource = this.createRandomEvents();
  }
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
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
    }); actionsheet.present();
  }

  addEvent() {
    let modal = this.modalCtrl.create(AddEventoPage, { selectedDay: this.selectedDay });
    modal.present();
  }

  onOptionSelected($event: any) {
    console.log($event)
    //this.calendar.mode = $event
  }

}
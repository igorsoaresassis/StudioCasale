import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { MonthViewComponent } from 'ionic2-calendar/monthview';
import { WeekViewComponent } from 'ionic2-calendar/weekview';
import { DayViewComponent } from 'ionic2-calendar/dayview';
import localePtBr from '@angular/common/locales/pt-PT';

import { registerLocaleData } from '@angular/common';
import { AddEventoPage } from './add-evento/add-evento';

registerLocaleData(localePtBr);

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    eventSource;
    viewTitle;

    isToday:boolean;
    calendar = {
        locale: 'pt-PT',
        mode: 'week',
        currentDate: new Date(),
        dateFormatter: {
          formatMonthViewDay: function(date:Date) {
              return date.getDate().toString();
          },
          formatMonthViewDayHeader: function(date:Date) {
              return 'MonMH';
          },
          formatMonthViewTitle: function(date:Date) {
              return 'testMT';
          },
          formatWeekViewDayHeader: function(date:Date) {
              return 'MonWH';
          },
          formatWeekViewTitle: function(date:Date) {
              return 'testWT';
          },
          formatWeekViewHourColumn: function(date:Date) {
              return 'testWH';
          },
          formatDayViewHourColumn: function(date:Date) {
              return 'testDH';
          },
          formatDayViewTitle: function(date:Date) {
              return 'testDT';
          }
      }
    };

    constructor(private navController:NavController, public modalCtrl: ModalController) {

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

      console.log(ev);
      let profileModal = this.modalCtrl.create(AddEventoPage, { ev });
      profileModal.present();
        // console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
        //     (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    }

    onCurrentDateChanged(event:Date) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    }

    onRangeChanged(ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    }

    markDisabled = (date:Date) => {
        var current = new Date();
        current.setHours(0, 0, 0);
        return date < current;
    };

}

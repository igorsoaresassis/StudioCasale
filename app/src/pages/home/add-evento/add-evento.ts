import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-add-evento',
  templateUrl: 'add-evento.html',
})
export class AddEventoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventoPage');
  }

  sair(){
    this.navCtrl.pop();
  }

}

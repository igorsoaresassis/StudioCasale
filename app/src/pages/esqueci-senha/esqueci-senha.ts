import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-esqueci-senha',
  templateUrl: 'esqueci-senha.html',
})
export class EsqueciSenhaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EsqueciSenhaPage');
  }

  esqueciSenha(){
    this.navCtrl.setRoot(LoginPage);
  }

}

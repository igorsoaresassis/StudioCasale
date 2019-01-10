import { LoginService } from './../../domain/login/login_service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { EsqueciSenhaPage } from '../esqueci-senha/esqueci-senha';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public email: string;
  public password: string;

  constructor(
    public navCtrl: NavController,
    private loginService: LoginService,
    private _alertCtrl: AlertController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.loginService
      .efetuaLogin(this.email, this.password)
      .then(user => {
        if(user.msg === "Action not found") {
          this._alertCtrl
            .create({
              title: "Problema no login",
              subTitle: "Email ou senha inválidos. Tente Novamente!",
              buttons: [{ text: "Ok" }]
            })
            .present();
        } else {
          this.navCtrl.setRoot(HomePage);
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  esqueciSenha(){
    this.navCtrl.push(EsqueciSenhaPage);
  }

}

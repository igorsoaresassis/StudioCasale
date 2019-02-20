import { UsuarioService } from './../../domain/usuario/usuario_service';
import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { MyApp } from '../../app/app.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public id;
  public nome;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public usuarioService: UsuarioService) {
    this.id = localStorage.getItem('idUsuario');
  }

  ionViewWillEnter(){
    let loading = this.loadingCtrl.create({
      content: 'Carregando...'
    });
    loading.present();

    this.usuarioService.buscarAtendente(this.id)
      .then(user => {
        if(user.msg === "Expired Token.") {
          localStorage.clear();
          this.navCtrl.setRoot(MyApp);
          loading.dismiss();
        } else {
          this.nome = user.data.userName;
          loading.dismiss();
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  sair() {
    document.querySelector(".tabbar").setAttribute("style", "z-index:-1");
    localStorage.clear();
    this.navCtrl.setRoot(LoginPage);
  }
}

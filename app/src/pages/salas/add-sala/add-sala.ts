import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SalasPage } from '../salas';
import { SalaService } from '../../../domain/sala/sala_service';

@Component({
  selector: 'page-add-sala',
  templateUrl: 'add-sala.html',
})
export class AddSalaPage {

  public nome

  constructor(
    public navCtrl: NavController,
    public salaService: SalaService,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSalaPage');
  }

  addSala(){
    this.salaService
      .adicionandoSala(this.nome)
      .then(user => {
        console.log(user);
        this.navCtrl.setRoot(SalasPage);
      })
      .catch(error => {
        console.log(error);
      })
  }
}

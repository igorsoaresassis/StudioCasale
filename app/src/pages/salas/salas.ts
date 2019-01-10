import { EditSalaPage } from './edit-sala/edit-sala';
import { SalaService } from './../../domain/sala/sala_service';
import { AddSalaPage } from './add-sala/add-sala';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-salas',
  templateUrl: 'salas.html',
})
export class SalasPage {

  public sala = [];

  constructor(
    public navCtrl: NavController,
    public salaService: SalaService,
    public navParams: NavParams
  ) {
  }

  ionViewWillEnter() {
    this.salaService
      .listarSalas()
      .then(user => {
        this.sala = user.data;
        console.log(this.sala);
      })
      .catch(error => {
        console.log(error);
      })
  }

  addSala() {
    this.navCtrl.push(AddSalaPage);
  }

  editar(id) {
    this.navCtrl.push(EditSalaPage, id);
  }

  excluir(id) {
    this.salaService
      .excluirSala(id)
      .then(user => {
        console.log(user);
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
      })
      .catch(error => {
        console.log(error);
      })
  }

}

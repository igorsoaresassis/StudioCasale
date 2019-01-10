import { EditAtendentePage } from './edit-atendente/edit-atendente';
import { UsuarioService } from './../../domain/usuario/usuario_service';
import { AddAtendentePage } from './add-atendente/add-atendente';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-atendentes',
  templateUrl: 'atendentes.html',
})
export class AtendentesPage {

  public usuario = [];

  constructor(
    public navCtrl: NavController,
    private usuarioService: UsuarioService,
    public navParams: NavParams
  ) {
  }

  ionViewWillEnter() {
    this.usuarioService
      .listarUsuarios()
      .then(user => {
        this.usuario = user.data;
        console.log(this.usuario);
      })
      .catch(error => {
        console.log(error);
      })
  }

  addAtendente() {
    this.navCtrl.push(AddAtendentePage);
  }

  editar(id) {
    this.navCtrl.push(EditAtendentePage, id);
  }

  excluir(id) {
    this.usuarioService
      .excluirUsuario(id)
      .then(user => {
        console.log(user);
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
      })
      .catch(error => {
        console.log(error);
      })
  }

}

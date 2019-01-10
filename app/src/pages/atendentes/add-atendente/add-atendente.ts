import { UsuarioService } from './../../../domain/usuario/usuario_service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AtendentesPage } from '../atendentes';
import { SalaService } from '../../../domain/sala/sala_service';

@Component({
  selector: 'page-add-atendente',
  templateUrl: 'add-atendente.html',
})
export class AddAtendentePage {

  public sala = [];
  public selectOptions;

  public id;
  public nome;
  public email;
  public senha;
  public salas;
  public dadosSala: Array<{}> = [];

  constructor(
    public navCtrl: NavController,
    private usuarioService: UsuarioService,
    public salaService: SalaService,
    public navParams: NavParams) {
      if(this.navParams.data) {
        this.id = this.navParams.data;
      }

      this.selectOptions = {
        title: 'Escolha uma sala',
        subTitle: 'É possível selecionar multiplas salas',
        mode: 'md'
      };
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

  adicionarAtendente(){
    for (let index = 0; index < this.salas.length; index++) {
      this.dadosSala.push(parseInt(this.salas[index]))
    }
    this.usuarioService
      .adicionandoUsuario(this.nome, this.email, this.senha, this.dadosSala)
      .then(user => {
        console.log(user);
        this.navCtrl.setRoot(AtendentesPage);
      })
      .catch(error => {
        console.log(error);
      })
  }
}

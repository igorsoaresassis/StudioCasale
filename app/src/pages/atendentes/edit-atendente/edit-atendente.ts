import { SalaService } from './../../../domain/sala/sala_service';
import { UsuarioService } from './../../../domain/usuario/usuario_service';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AtendentesPage } from '../atendentes';

@Component({
  selector: 'page-edit-atendente',
  templateUrl: 'edit-atendente.html',
})
export class EditAtendentePage implements OnInit{

  public selectOptions;

  public id;
  public nome;
  public email;
  public nomeDesatualizado;
  public emailDesatualizado;
  public sala = [];
  public salas;

  constructor(
    public navCtrl: NavController,
    public salaService: SalaService,
    private usuarioService: UsuarioService,
    private _alertCtrl: AlertController,
    public navParams: NavParams
  ) {
    this.id = this.navParams.data;

    this.selectOptions = {
      title: 'Escolha uma sala',
      subTitle: 'É possível selecionar multiplas salas',
      mode: 'md'
    };
  }

  ngOnInit() {
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

  ionViewWillEnter() {
    this.usuarioService
      .buscarAtendente(this.id)
      .then(user => {
        this.nome = user.data.userName;
        this.nomeDesatualizado = user.data.userName;
        this.email = user.data.userEmail;
        this.emailDesatualizado = user.data.userEmail;
      })
      .catch(error => {
        console.log(error);
      })
  }

  updateAtendente(){
    if(this.nome !== this.nomeDesatualizado || this.email !== this.emailDesatualizado) {
      this.usuarioService
        .editartUsuario(this.id, this.nome, this.email, this.salas)
        .then(user => {
          if(user.msg === "Dados atualizados com sucesso") {
            this._alertCtrl
              .create({
                title: "Atualizado com Sucesso.",
                buttons: [
                  {
                    text: "Ok",
                    handler: () => {
                      this.navCtrl.setRoot(AtendentesPage);
                    }
                  }]
              })
              .present();
          } else {
            this._alertCtrl
              .create({
                title: "Erro inesperado, constatar o desenvolvedor",
                buttons: [{ text: "Ok" }]
              })
              .present();
          }
        })
        .catch(error => {
          console.log(error);
        })
    } else {
      this._alertCtrl
        .create({
          title: "Nenhuma alteração feita!",
          buttons: [{ text: "Ok" }]
        })
        .present();
    }
  }

}

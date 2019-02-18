import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { UsuarioService } from '../../domain/usuario/usuario_service';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  public id;
  public nome;
  public senha;
  public novaSenha;
  public confirmarSenha;
  public senhaAntiga;

  constructor(public navCtrl: NavController,
    private _alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public usuarioService: UsuarioService) {
  }

  ionViewWillEnter(){
    let loading = this.loadingCtrl.create({
      content: 'Carregando...'
    });
    loading.present();

    this.id = localStorage.getItem('idUsuario');

    this.usuarioService.buscarAtendente(this.id)
    .then(user => {
      this.nome = user.data.userName;
      loading.dismiss();
    })
    .catch(error => {
      console.log(error);
    })
  }

  atualizarSenha() {
    if(this.novaSenha === this.confirmarSenha){
      let alert = this._alertCtrl.create({
        title: 'Atualizar a senha',
        message: 'Deseja atuatulizar a senha?',
        buttons: [
          {
            text: 'Não',
            role: 'Não'
          },
          {
            text: 'Sim',
            role: 'Sim',
            handler: () => {
              this.id = 0;
              this.usuarioService
                .atualizarSenha(this.id, this.novaSenha, this.senhaAntiga)
                .then(user => {
                  if(user.msg === "Senha alterada com sucesso") {
                    this._alertCtrl
                      .create({
                        title: "Erro inesperado, constatar o Igor",
                        buttons: [{ text: "Ok" }]
                      })
                      .present();
                    this.navCtrl.setRoot(PerfilPage);
                  } else if(user.msg === "Falha ao alterar senha") {
                    this._alertCtrl
                      .create({
                        title: "Falha, verifique a senhas e faça novamente!",
                        buttons: [{ text: "Ok" }]
                      })
                      .present();
                  } else {
                    this._alertCtrl
                      .create({
                        title: "Erro inesperado, constatar o Igor",
                        buttons: [{ text: "Ok" }]
                      })
                      .present();
                  }
                })
                .catch(error => {
                  console.log(error);
                })
            }
          }
        ]
      });
      alert.present();
    } else {
      this._alertCtrl
        .create({
          title: "Senha diferentes.",
          subTitle: "A senha estão diferentes!",
          buttons: [{ text: "Ok" }]
        })
        .present();
    }
  }

  sair() {
    document.querySelector(".tabbar").setAttribute("style", "z-index:-1");
    localStorage.clear();
    this.navCtrl.setRoot(LoginPage);
  }

}

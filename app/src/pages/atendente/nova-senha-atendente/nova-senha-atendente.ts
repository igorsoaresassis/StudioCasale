import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AtendentePage } from '../atendente';
import { UsuarioService } from '../../../domain/usuario/usuario_service';

@Component({
  selector: 'page-nova-senha-atendente',
  templateUrl: 'nova-senha-atendente.html',
})
export class NovaSenhaAtendentePage {

  public id;
  public novaSenha;
  public confirmarSenha;
  public senhaAntiga = 0;

  constructor(public navCtrl: NavController,
    private _alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public usuarioService: UsuarioService,
     public navParams: NavParams) {
    this.id = this.navParams.data
  }

  ionViewDidLoad() {
    document.querySelector(".tabbar").setAttribute("style", "z-index:-1");
    console.log('ionViewDidLoad NovaSenhaAtendentePage');
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
              this.usuarioService
                .atualizarSenha(this.id, this.novaSenha, this.senhaAntiga)
                .then(user => {
                  if(user.msg === "Senha alterada com sucesso") {
                    this._alertCtrl
                      .create({
                        title: "Atualizado com sucesso!",
                        buttons: [{ text: "Ok" }]
                      })
                      .present();
                    this.navCtrl.setRoot(AtendentePage);
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

}

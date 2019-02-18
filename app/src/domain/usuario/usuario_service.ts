import { Injectable } from '@angular/core';
import { ServerProvider } from '../../providers/server/server';
import { HTTP } from '@ionic-native/http';

declare var _http;

@Injectable()
export class UsuarioService {

    public token;

    constructor(
      private _http: HTTP,
      private _service: ServerProvider) {
        this.token = localStorage.getItem('token');
    }

    adicionandoUsuario(userName, userEmail, userPassword, userRooms) {
      let api = this._service.URL_API + "controller=user&action=insert";

      let data = {
        "userName": userName,
        "userEmail": userEmail,
        "userPassword": userPassword,
        "userRooms": userRooms
      }

      let header = {
        "Content-Type": "application/json",
        "Authorization": this.token
      }

      this._http.setDataSerializer('json');
      return this._http
        .post(api, data, header)
        .then(dado =>{
          let addUser = JSON.parse(dado.data)
          return addUser;
        })
        .catch(error =>{
          let resposta = JSON.parse(error.error)
          return resposta;
        });
    }

    listarUsuarios(){
      let api = this._service.URL_API + "controller=user&action=list";

      let data = {
      }

      let header = {
        "Content-Type": "application/json",
        "Authorization": this.token
      }

      return this._http
        .get(api, data, header)
        .then(dado =>{
          let listUsers = JSON.parse(dado.data)
          return listUsers;
        })
        .catch(error =>{
          let resposta = JSON.parse(error.error)
          return resposta;
        });
    }

    buscarAtendente(id) {
      let api = this._service.URL_API + "controller=user&action=get&key=" + `${id}`;

      let data = {
      }

      let header = {
        "Content-Type": "application/json",
        "Authorization": this.token
      }

      return this._http
        .get(api, data, header)
        .then(dado =>{
          let dadosUsers = JSON.parse(dado.data)
          return dadosUsers;
        })
        .catch(error =>{
          let resposta = JSON.parse(error.error)
          return resposta;
        });
    }


    editartUsuario(userId, userName, userEmail, userRooms) {
      let api = this._service.URL_API + "controller=user&action=update";

      let data = {
        "userId": userId,
        "userName": userName,
        "userEmail": userEmail,
        "userRooms": userRooms
      }

      let header = {
        "Content-Type": "application/json",
        "Authorization": this.token
      }

      this._http.setDataSerializer('json');
      return this._http
        .put(api, data, header)
        .then(dado =>{
          let editUsers = JSON.parse(dado.data)
          return editUsers;
        })
        .catch(error =>{
          let resposta = JSON.parse(error.error)
          return resposta;
        });
    }

    inativarUsuario(id) {
      let api = this._service.URL_API + "controller=user&action=inactivate&key=" + `${id}`;

      let data = {
      }

      let header = {
        "Content-Type": "application/json",
        "Authorization": this.token
      }

      this._http.setDataSerializer('json');
      return this._http
        .delete(api, data, header)
        .then(dado =>{
          let inativaUsuario = JSON.parse(dado.data)
          return inativaUsuario;
        })
        .catch(error =>{
          let resposta = JSON.parse(error.error)
          return resposta;
        });
    }

    ativarUsuario(id) {
      let api = this._service.URL_API + "controller=user&action=activate&key=" + `${id}`;

      let data = {
      }

      let header = {
        "Content-Type": "application/json",
        "Authorization": this.token
      }

      this._http.setDataSerializer('json');
      return this._http
        .put(api, data, header)
        .then(dado =>{
          let ativarUsuario = JSON.parse(dado.data)
          return ativarUsuario;
        })
        .catch(error =>{
          let resposta = JSON.parse(error.error)
          return resposta;
        });
    }

    atualizarSenha(id, senha, senhaAntiga) {
      if(id === 0){

        let api = this._service.URL_API + "controller=user&action=changePassword";

        let data = {
          "currentPassword": senhaAntiga,
          "newPassword": senha
        }

        let header = {
          "Content-Type": "application/json",
          "Authorization": this.token
        }

        this._http.setDataSerializer('json');
        return this._http
          .post(api, data, header)
          .then(dado =>{
            let senhaUsuario = JSON.parse(dado.data)
            return senhaUsuario;
          })
          .catch(error =>{
            let resposta = JSON.parse(error.error)
            return resposta;
          });
      } else {
        let api = this._service.URL_API + "controller=user&action=changePassword&key=" + `${id}`;

        let data = {
          "newPassword": senha
        }

        let header = {
          "Content-Type": "application/json",
          "Authorization": this.token
        }

        this._http.setDataSerializer('json');
        return this._http
          .post(api, data, header)
          .then(dado =>{
            let senhaUsuario = JSON.parse(dado.data)
            return senhaUsuario;
          })
          .catch(error =>{
            let resposta = JSON.parse(error.error)
            return resposta;
          });
      }

    }
}



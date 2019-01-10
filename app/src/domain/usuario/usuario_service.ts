import { Events } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { ServerProvider } from '../../providers/server/server';
import { HTTP } from '@ionic-native/http';

@Injectable()
export class UsuarioService {

    public versao: any

    constructor(
      public events: Events,
      private _http: HTTP,
      private _service: ServerProvider) {
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
        "Content-Type": "application/json"
      }

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
        "Content-Type": "application/json"
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
        "Content-Type": "application/json"
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
        "Content-Type": "application/json"
      }

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

    excluirUsuario(id) {
      let api = this._service.URL_API + "controller=user&action=delete&key=" + `${id}`;

      let data = {
      }

      let header = {
        "Content-Type": "application/json"
      }

      return this._http
        .delete(api, data, header)
        .then(dado =>{
          let exluirUsuario = JSON.parse(dado.data)
          return exluirUsuario;
        })
        .catch(error =>{
          let resposta = JSON.parse(error.error)
          return resposta;
        });
    }
}



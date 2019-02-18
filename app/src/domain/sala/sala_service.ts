import { Injectable } from '@angular/core';
import { ServerProvider } from '../../providers/server/server';
import { Events } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Injectable()
export class SalaService {

    public token;

    constructor(
      private _http: HTTP,
      private _service: ServerProvider) {
        this.token = localStorage.getItem('token');
    }

    listarSalas(){
        let api = this._service.URL_API + "controller=room&action=list";

        let data = {
        }

        let header = {
          "Content-Type": "application/json",
          "Authorization": this.token
        }

        return this._http
          .get(api, data, header)
          .then(dado =>{
            let listSala= JSON.parse(dado.data)
            return listSala;
          })
          .catch(error =>{
            let resposta = JSON.parse(error.error)
            return resposta;
          });
    }

    adicionandoSala(roomName) {
      let api = this._service.URL_API + "controller=room&action=insert";

      let data = {
        "roomName": roomName
      }

      let header = {
        "Content-Type": "application/json",
        "Authorization": this.token
      }

      this._http.setDataSerializer('json');
      return this._http
        .post(api, data, header)
        .then(dado =>{
          let addSala = JSON.parse(dado.data)
          return addSala;
        })
        .catch(error =>{
          let resposta = JSON.parse(error.error)
          return resposta;
        });
    }

    buscarSala(id) {
      let api = this._service.URL_API + "controller=room&action=get&key=" + `${id}`;

      let data = {
      }

      let header = {
        "Content-Type": "application/json",
        "Authorization": this.token
      }

      return this._http
        .get(api, data, header)
        .then(dado =>{
          let dadosSala = JSON.parse(dado.data)
          return dadosSala;
        })
        .catch(error =>{
          let resposta = JSON.parse(error.error)
          return resposta;
        });
    }

    editarSala(id, roomName) {
      let api = this._service.URL_API + "controller=room&action=update";

      let data = {
        "roomId": id,
        "roomName": roomName
      }

      let header = {
        "Content-Type": "application/json",
        "Authorization": this.token
      }

      this._http.setDataSerializer('json');
      return this._http
        .put(api, data, header)
        .then(dado =>{
          let updateSala= JSON.parse(dado.data)
          return updateSala;
        })
        .catch(error =>{
          let resposta = JSON.parse(error.error)
          return resposta;
        });
    }

    excluirSala(id) {
      let api = this._service.URL_API + "controller=room&action=delete&key=" + `${id}`;

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
          let exluirSala = JSON.parse(dado.data)
          return exluirSala;
        })
        .catch(error =>{
          let resposta = JSON.parse(error.error)
          return resposta;
        });
    }
}



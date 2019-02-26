import { Injectable } from '@angular/core';
import { ServerProvider } from '../../providers/server/server';
import { Events } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Injectable()
export class CalendarioService {

    public id;
    public token;

    constructor(
      private _http: HTTP,
      private _service: ServerProvider) {
        this.id = localStorage.getItem('idUsuario');
        this.token = localStorage.getItem('token');
    }

    adicionarEvento(descricao, inicio, fim, salas){
        let api = this._service.URL_API + "controller=event&action=insert";

        let data = {
          "eventStartDate": inicio,
          "eventEndDate": fim,
          "eventDescription": descricao,
          "roomId": salas,
          "userId": this.id
        }

        let header = {
          "Content-Type": "application/json",
          "Authorization": this.token
        }

        this._http.setDataSerializer('json');
        return this._http
          .post(api, data, header)
          .then(dado =>{
            let inserirEvento = JSON.parse(dado.data)
            return inserirEvento;
          })
          .catch(error =>{
            let resposta = JSON.parse(error.error)
            return resposta;
          });
    }

    editarEvento(eventId, descricao, inicio, fim, salas) {
      let api = this._service.URL_API + "controller=event&action=update";

      let data = {
        "eventId": eventId,
        "eventStartDate": inicio,
        "eventEndDate": fim,
        "eventDescription": descricao,
        "roomId": salas,
        "userId": this.id
      }

      let header = {
        "Content-Type": "application/json",
        "Authorization": this.token
      }

      this._http.setDataSerializer('json');
      return this._http
        .put(api, data, header)
        .then(dado =>{
          let editarEvento = JSON.parse(dado.data)
          return editarEvento;
        })
        .catch(error =>{
          let resposta = JSON.parse(error.error)
          return resposta;
        });
    }

    buscarEvento() {
      let api = this._service.URL_API + "controller=event&action=list";

      let data = {
      }

      let header = {
        "Content-Type": "application/json",
        "Authorization": this.token
      }

      this._http.setDataSerializer('json');
      return this._http
        .get(api, data, header)
        .then(dado =>{
          let editarEvento = JSON.parse(dado.data)
          return editarEvento;
        })
        .catch(error =>{
          let resposta = JSON.parse(error.error)
          return resposta;
        });
    }

    excluirEvento(id) {
      let api = this._service.URL_API + "controller=event&action=delete&key=" + `${id}`;

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



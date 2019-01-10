import { Events } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { ServerProvider } from '../../providers/server/server';
import { HTTP } from '@ionic-native/http';

@Injectable()
export class LoginService {

    public versao: any

    constructor(
      public events: Events,
      private _http: HTTP,
      private _service: ServerProvider) {
    }

    efetuaLogin(email, password){


        let api = this._service.URL_API + "controller=user&action=login";

        let data = {
          "userEmail": email,
          "userPassword": password
        }

        let header = {
          "Content-Type": "application/json"
        }

        return this._http
          .post(api, data, header)
          .then(dado =>{
            console.log('Teste Certo' + dado);
            let user = JSON.parse(dado.data)
            return user;
          })
          .catch(error =>{
            let resposta = JSON.parse(error.error)
            return resposta;
          });
    }
}



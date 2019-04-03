import {Events} from 'ionic-angular';
import {Injectable} from '@angular/core';
import {ServerProvider} from '../../providers/server/server';
import {HTTP} from '@ionic-native/http';

@Injectable()
export class LoginService {

    constructor(
        public events: Events,
        private _http: HTTP,
        private _service: ServerProvider) {
    }

    efetuaLogin(email, password) {


        let api = this._service.URL_API + "controller=user&action=login";

        let data = {
            "userEmail": email,
            "userPassword": password
        }

        let header = {
            "Content-Type": "application/json"
        }

        this._http.setDataSerializer('json');
        return this._http
            .post(api, data, header)
            .then(dado => {
                let retorno = JSON.parse(dado.data)
                let user
                if (retorno.data === null) {
                    user = "Erro ao fazer login";
                } else {

                    user = JSON.parse(dado.data)

                    localStorage.setItem('token', user.data.jwtToken);
                }
                return user;
            })
            .catch(error => {
                let resposta = JSON.parse(error.error)
                return resposta;
            });
    }
}



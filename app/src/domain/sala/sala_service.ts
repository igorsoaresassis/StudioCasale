import {Injectable} from '@angular/core';
import {ServerProvider} from '../../providers/server/server';
import {HTTP} from '@ionic-native/http';

@Injectable()
export class SalaService {

    public token;

    constructor(private _http: HTTP, private _service: ServerProvider) {
        this.token = localStorage.getItem('token');
        this._http.setDataSerializer('json');
        this._http.setHeader('*', 'Content-Type', 'application/json');
        this._http.setHeader('*', 'Authorization', this.token);
    }

    list() {
        let api = this._service.URL_API + "controller=room&action=list";

        return this._http
            .get(api, {}, {})
            .then(response => {
                return JSON.parse(response.data);
            })
            .catch(error => {
                return JSON.parse(error.error);
            });
    }

    insert(roomName) {
        let api = this._service.URL_API + "controller=room&action=insert";

        let data = {
            roomName: roomName
        };

        return this._http
            .post(api, data, {})
            .then(response => {
                return JSON.parse(response.data);
            })
            .catch(error => {
                return JSON.parse(error.error);
            });
    }

    get(id) {
        let api = this._service.URL_API + "controller=room&action=get&key=" + `${id}`;

        let data = {};

        return this._http
            .get(api, data, {})
            .then(response => {
                return JSON.parse(response.data);
            })
            .catch(error => {
                return JSON.parse(error.error);
            });
    }

    update(id, roomName) {
        let api = this._service.URL_API + "controller=room&action=update";

        let data = {
            roomId: id,
            roomName: roomName
        };

        return this._http
            .put(api, data, {})
            .then(response => {
                return JSON.parse(response.data);
            })
            .catch(error => {
                return JSON.parse(error.error);
            });
    }

    remove(id) {
        let api = this._service.URL_API + "controller=room&action=delete&key=" + `${id}`;

        let data = {};

        return this._http
            .delete(api, data, {})
            .then(response => {
                return JSON.parse(response.data);
            })
            .catch(error => {
                return JSON.parse(error.error);
            });
    }
}



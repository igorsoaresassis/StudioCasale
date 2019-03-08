import {Injectable} from '@angular/core';
import {ServerProvider} from '../../providers/server/server';
import {HTTP} from '@ionic-native/http';

@Injectable()
export class UsuarioService {

    public token = null;

    constructor(private _http: HTTP, private _service: ServerProvider) {
        this.token = localStorage.getItem('token');
        this._http.setDataSerializer('json');
        this._http.setHeader('*', 'Content-Type', 'application/json');
        this._http.setHeader('*', 'Authorization', this.token);
    }

    insert(userName, userEmail, userPassword, userRooms) {
        let api = `${ this._service.URL_API }controller=user&action=insert`;

        let data = {
            userName: userName,
            userEmail: userEmail,
            userPassword: userPassword,
            userRooms: userRooms
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

    list() {
        let api = `${ this._service.URL_API }controller=user&action=list`;

        return this._http.get(api, {}, {})
            .then(response => {
                return JSON.parse(response.data);
            })
            .catch(error => {
                return JSON.parse(error.error);
            });
    }

    get(userId) {
        let api = `${ this._service.URL_API }controller=user&action=get&key=${ userId }`;

        return this._http
            .get(api, {}, {})
            .then(response => {
                return JSON.parse(response.data);
            })
            .catch(error => {
                return JSON.parse(error.error);
            });
    }

    update(user) {
        let api = `${ this._service.URL_API }controller=user&action=update`;

        let data = {
            userId: user.userId,
            userName: user.userName,
            userEmail: user.userEmail,
            userPassword: user.userPassword,
            userRooms: user.userRooms
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

    inactivateUser(userId) {
        let api = `${ this._service.URL_API }controller=user&action=inactivate&key=${ userId }`;

        return this._http
            .delete(api, {}, {})
            .then(response => {
                return JSON.parse(response.data);
            })
            .catch(error => {
                return JSON.parse(error.error);
            });
    }

    activateUser(userId) {
        let api = `${ this._service.URL_API }controller=user&action=activate&key=${ userId }`;

        return this._http
            .put(api, {}, {})
            .then(response => {
                return JSON.parse(response.data);
            })
            .catch(error => {
                return JSON.parse(error.error);
            });
    }

    changePassword(userId, newPassword, currentPassword) {
        let api = `${ this._service.URL_API }controller=user&action=changePassword&key=${ userId }`;

        let data = {
            currentPassword: currentPassword,
            newPassword: newPassword
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
}



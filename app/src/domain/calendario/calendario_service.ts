import {Injectable} from '@angular/core';
import {ServerProvider} from '../../providers/server/server';
import {Events} from 'ionic-angular';
import {HTTP} from '@ionic-native/http';

@Injectable()
export class CalendarioService {

    public loggedUserId;
    public token;

    constructor(private _http: HTTP, private _service: ServerProvider) {
        this.loggedUserId = localStorage.getItem('userId');
        this.token = localStorage.getItem('token');
        this._http.setDataSerializer('json');
        this._http.setHeader('*', 'Content-Type', 'application/json');
        this._http.setHeader('*', 'Authorization', this.token);
    }

    insert(description, startDate, endDate, roomId, userId) {
        let api = `${this._service.URL_API}controller=event&action=insert`;

        let data = {
            eventDescription: description,
            eventStartDate: startDate,
            eventEndDate: endDate,
            roomId: roomId,
            userId: userId
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

    update(eventId, description, startDate, endDate, roomId, userId) {
        let api = `${this._service.URL_API}controller=event&action=update`;

        let data = {
            eventId: eventId,
            eventDescription: description,
            eventStartDate: startDate,
            eventEndDate: endDate,
            roomId: roomId,
            userId: userId
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

    list(filter = null) {
        let api = `${ this._service.URL_API}controller=event&action=list`;

        if (filter) {
            api += `&key=${ filter }`;
        }

        return this._http
            .get(api, {}, {})
            .then(response => {
                return JSON.parse(response.data);
            })
            .catch(error => {
                return JSON.parse(error.error);
            });
    }

    remove(id) {
        let api = `${this._service.URL_API}controller=event&action=delete&key=${id}`;

        return this._http
            .delete(api, {}, {})
            .then(response => {
                return JSON.parse(response.data);
            })
            .catch(error => {
                return JSON.parse(error.error);
            });
    }
}



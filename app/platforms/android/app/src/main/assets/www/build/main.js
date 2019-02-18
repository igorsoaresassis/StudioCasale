webpackJsonp([0],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__perfil_perfil__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__atendente_atendente__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendario_calendario__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sala_sala__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage(events) {
        var _this = this;
        this.events = events;
        this.events.subscribe('user', function (user) {
            _this.status = user;
            if (_this.status === true) {
                _this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
                _this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__calendario_calendario__["a" /* CalendarioPage */];
                _this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__atendente_atendente__["a" /* AtendentePage */];
                _this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__sala_sala__["a" /* SalaPage */];
                _this.tab5Root = __WEBPACK_IMPORTED_MODULE_0__perfil_perfil__["a" /* PerfilPage */];
            }
            else {
                _this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
                _this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__calendario_calendario__["a" /* CalendarioPage */];
                _this.tab5Root = __WEBPACK_IMPORTED_MODULE_0__perfil_perfil__["a" /* PerfilPage */];
            }
        });
    }
    TabsPage.prototype.ngOnInit = function () {
        this.statusMenu = localStorage.getItem('userStatus');
        if (this.statusMenu === "true") {
            this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
            this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__calendario_calendario__["a" /* CalendarioPage */];
            this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__atendente_atendente__["a" /* AtendentePage */];
            this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__sala_sala__["a" /* SalaPage */];
            this.tab5Root = __WEBPACK_IMPORTED_MODULE_0__perfil_perfil__["a" /* PerfilPage */];
        }
        else {
            this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
            this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__calendario_calendario__["a" /* CalendarioPage */];
            this.tab5Root = __WEBPACK_IMPORTED_MODULE_0__perfil_perfil__["a" /* PerfilPage */];
        }
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/sympla/Projetos/studio/src/pages/tabs/tabs.html"*/'<ion-tabs>\n    <ion-tab *ngIf="statusMenu === \'true\'" [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n    <ion-tab *ngIf="statusMenu === \'true\'" [root]="tab2Root" tabTitle="Calendario" tabIcon="calendar"></ion-tab>\n    <ion-tab *ngIf="statusMenu === \'true\'" [root]="tab3Root" tabTitle="Atendente" tabIcon="contacts"></ion-tab>\n    <ion-tab *ngIf="statusMenu === \'true\'" [root]="tab4Root" tabTitle="Sala" tabIcon="medkit"></ion-tab>\n    <ion-tab *ngIf="statusMenu === \'true\'" [root]="tab5Root" tabTitle="Perfil" tabIcon="person"></ion-tab>\n    <ion-tab *ngIf="statusMenu === \'false\'" [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n    <ion-tab *ngIf="statusMenu === \'false\'" [root]="tab2Root" tabTitle="Calendario" tabIcon="calendar"></ion-tab>\n    <ion-tab *ngIf="statusMenu === \'false\'" [root]="tab5Root" tabTitle="Perfil" tabIcon="person"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/sympla/Projetos/studio/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* Events */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_server__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(events, _http, _service) {
        this.events = events;
        this._http = _http;
        this._service = _service;
    }
    LoginService.prototype.efetuaLogin = function (email, password) {
        var _this = this;
        var api = this._service.URL_API + "controller=user&action=login";
        var data = {
            "userEmail": email,
            "userPassword": password
        };
        var header = {
            "Content-Type": "application/json"
        };
        this._http.setDataSerializer('json');
        return this._http
            .post(api, data, header)
            .then(function (dado) {
            var retorno = JSON.parse(dado.data);
            var user;
            if (retorno.data === null) {
                user = "Erro ao fazer login";
            }
            else {
                user = JSON.parse(dado.data);
                _this.events.publish('user', user.data.userAdmin);
                localStorage.setItem('token', user.data.jwtToken);
            }
            return user;
        })
            .catch(function (error) {
            var resposta = JSON.parse(error.error);
            return resposta;
        });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_2__providers_server_server__["a" /* ServerProvider */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login_service.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import * as moment from 'moment';


var AddEventoPage = /** @class */ (function () {
    function AddEventoPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.event = {
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
            allDay: false,
            room: {}
        };
        this.minDate = new Date().toISOString();
        this.rooms$ = Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])([{ id: "room1", name: "room1" }, { id: "room2", name: "room2" }, { id: "room3", name: "room3" }]);
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_2_moment___default()(this.navParams.get('selectedDay')).format();
        this.event.startTime = preselectedDate;
        this.event.endTime = preselectedDate;
    }
    AddEventoPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AddEventoPage.prototype.save = function () {
        this.viewCtrl.dismiss(this.event);
    };
    AddEventoPage.prototype.blockDay = function ($event) {
        console.log($event);
    };
    AddEventoPage.prototype.optionSelected = function ($event) {
        console.log($event);
        this.event.room = $event;
    };
    AddEventoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-evento',template:/*ion-inline-start:"/Users/sympla/Projetos/studio/src/pages/calendario/add-evento/add-evento.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-buttons start>\n            <button ion-button icon-only (click)="cancel()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n        </ion-buttons>\n        <ion-title>Adicionar Horário</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list padding>\n        <ion-item>\n            <ion-textarea placeholder="Descrição" [(ngModel)]="event.notes" rows="3"></ion-textarea>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Início</ion-label>\n            <ion-datetime displayFormat="DD/MM/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.startTime" [min]="minDate"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Fim</ion-label>\n            <ion-datetime displayFormat="DD/MM/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.endTime" [min]="minDate"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Selecionar Sala</ion-label>\n            <ion-select>\n                <ion-option (ionSelect)="optionSelected($event)" *ngFor="let room of rooms$ | async" [value]="room">{{room.name}}</ion-option>\n            </ion-select>\n        </ion-item>\n\n\n        <ion-item>\n            <ion-label>Dia Bloqueado</ion-label>\n            <ion-checkbox [(ngModel)]="event.blockDay" (ionChange)="blockDay($event.value)"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Dia inteiro?</ion-label>\n            <ion-checkbox [(ngModel)]="event.allDay" [disabled]="event.blockDay"></ion-checkbox>\n        </ion-item>\n        <button ion-button block icon-left (click)="save()">\n    <ion-icon name="checkmark"></ion-icon> Adicionar Horário\n  </button>\n    </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/Users/sympla/Projetos/studio/src/pages/calendario/add-evento/add-evento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], AddEventoPage);
    return AddEventoPage;
}());

//# sourceMappingURL=add-evento.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_server_server__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsuarioService = /** @class */ (function () {
    function UsuarioService(_http, _service) {
        this._http = _http;
        this._service = _service;
        this.token = localStorage.getItem('token');
    }
    UsuarioService.prototype.adicionandoUsuario = function (userName, userEmail, userPassword, userRooms) {
        var api = this._service.URL_API + "controller=user&action=insert";
        var data = {
            "userName": userName,
            "userEmail": userEmail,
            "userPassword": userPassword,
            "userRooms": userRooms
        };
        var header = {
            "Content-Type": "application/json",
            "Authorization": this.token
        };
        this._http.setDataSerializer('json');
        return this._http
            .post(api, data, header)
            .then(function (dado) {
            var addUser = JSON.parse(dado.data);
            return addUser;
        })
            .catch(function (error) {
            var resposta = JSON.parse(error.error);
            return resposta;
        });
    };
    UsuarioService.prototype.listarUsuarios = function () {
        var api = this._service.URL_API + "controller=user&action=list";
        var data = {};
        var header = {
            "Content-Type": "application/json",
            "Authorization": this.token
        };
        return this._http
            .get(api, data, header)
            .then(function (dado) {
            var listUsers = JSON.parse(dado.data);
            return listUsers;
        })
            .catch(function (error) {
            var resposta = JSON.parse(error.error);
            return resposta;
        });
    };
    UsuarioService.prototype.buscarAtendente = function (id) {
        var api = this._service.URL_API + "controller=user&action=get&key=" + ("" + id);
        var data = {};
        var header = {
            "Content-Type": "application/json",
            "Authorization": this.token
        };
        return this._http
            .get(api, data, header)
            .then(function (dado) {
            var dadosUsers = JSON.parse(dado.data);
            return dadosUsers;
        })
            .catch(function (error) {
            var resposta = JSON.parse(error.error);
            return resposta;
        });
    };
    UsuarioService.prototype.editartUsuario = function (userId, userName, userEmail, userRooms) {
        var api = this._service.URL_API + "controller=user&action=update";
        var data = {
            "userId": userId,
            "userName": userName,
            "userEmail": userEmail,
            "userRooms": userRooms
        };
        var header = {
            "Content-Type": "application/json",
            "Authorization": this.token
        };
        this._http.setDataSerializer('json');
        return this._http
            .put(api, data, header)
            .then(function (dado) {
            var editUsers = JSON.parse(dado.data);
            return editUsers;
        })
            .catch(function (error) {
            var resposta = JSON.parse(error.error);
            return resposta;
        });
    };
    UsuarioService.prototype.inativarUsuario = function (id) {
        var api = this._service.URL_API + "controller=user&action=inactivate&key=" + ("" + id);
        var data = {};
        var header = {
            "Content-Type": "application/json",
            "Authorization": this.token
        };
        this._http.setDataSerializer('json');
        return this._http
            .delete(api, data, header)
            .then(function (dado) {
            var inativaUsuario = JSON.parse(dado.data);
            return inativaUsuario;
        })
            .catch(function (error) {
            var resposta = JSON.parse(error.error);
            return resposta;
        });
    };
    UsuarioService.prototype.ativarUsuario = function (id) {
        var api = this._service.URL_API + "controller=user&action=activate&key=" + ("" + id);
        var data = {};
        var header = {
            "Content-Type": "application/json",
            "Authorization": this.token
        };
        this._http.setDataSerializer('json');
        return this._http
            .put(api, data, header)
            .then(function (dado) {
            var ativarUsuario = JSON.parse(dado.data);
            return ativarUsuario;
        })
            .catch(function (error) {
            var resposta = JSON.parse(error.error);
            return resposta;
        });
    };
    UsuarioService.prototype.atualizarSenha = function (id, senha, senhaAntiga) {
        if (id === 0) {
            var api = this._service.URL_API + "controller=user&action=changePassword";
            var data = {
                "currentPassword": senhaAntiga,
                "newPassword": senha
            };
            var header = {
                "Content-Type": "application/json",
                "Authorization": this.token
            };
            this._http.setDataSerializer('json');
            return this._http
                .post(api, data, header)
                .then(function (dado) {
                var senhaUsuario = JSON.parse(dado.data);
                return senhaUsuario;
            })
                .catch(function (error) {
                var resposta = JSON.parse(error.error);
                return resposta;
            });
        }
        else {
            var api = this._service.URL_API + "controller=user&action=changePassword&key=" + ("" + id);
            var data = {
                "newPassword": senha
            };
            var header = {
                "Content-Type": "application/json",
                "Authorization": this.token
            };
            this._http.setDataSerializer('json');
            return this._http
                .post(api, data, header)
                .then(function (dado) {
                var senhaUsuario = JSON.parse(dado.data);
                return senhaUsuario;
            })
                .catch(function (error) {
                var resposta = JSON.parse(error.error);
                return resposta;
            });
        }
    };
    UsuarioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_1__providers_server_server__["a" /* ServerProvider */]])
    ], UsuarioService);
    return UsuarioService;
}());

//# sourceMappingURL=usuario_service.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAtendentePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_usuario_usuario_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__atendente__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domain_sala_sala_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddAtendentePage = /** @class */ (function () {
    function AddAtendentePage(navCtrl, usuarioService, salaService, loadingCtrl, _alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.usuarioService = usuarioService;
        this.salaService = salaService;
        this.loadingCtrl = loadingCtrl;
        this._alertCtrl = _alertCtrl;
        this.navParams = navParams;
        this.sala = [];
        if (this.navParams.data) {
            this.id = this.navParams.data;
        }
        this.selectOptions = {
            title: 'Escolha uma sala',
            subTitle: 'É possível selecionar multiplas salas',
            mode: 'md'
        };
    }
    AddAtendentePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        document.querySelector(".tabbar").setAttribute("style", "z-index:-1");
        var loading = this.loadingCtrl.create({
            content: 'Buscando...'
        });
        loading.present();
        this.salaService
            .listarSalas()
            .then(function (user) {
            _this.sala = user.data;
            console.log(_this.sala);
            loading.dismiss();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AddAtendentePage.prototype.adicionarAtendente = function () {
        var _this = this;
        var alert = this._alertCtrl.create({
            title: 'Adicionar Atendente!',
            message: 'Dados inseridos corretamente?',
            buttons: [
                {
                    text: 'Não',
                    role: 'Não'
                },
                {
                    text: 'Sim',
                    role: 'Sim',
                    handler: function () {
                        _this.usuarioService
                            .adicionandoUsuario(_this.nome, _this.email, _this.senha, _this.salas)
                            .then(function (user) {
                            if (user.msg === "Atendente inserido com sucesso") {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__atendente__["a" /* AtendentePage */]);
                            }
                            else {
                                _this._alertCtrl
                                    .create({
                                    title: "Erro inesperado, constatar o Igor",
                                    buttons: [{ text: "Ok" }]
                                })
                                    .present();
                            }
                        })
                            .catch(function (error) {
                            console.log(error);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    AddAtendentePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-add-atendente',template:/*ion-inline-start:"/Users/sympla/Projetos/studio/src/pages/atendente/add-atendente/add-atendente.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Adicionar Atendente</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-12 class="formulario">\n                <ion-input [(ngModel)]="nome" class="nome" type="text" placeholder="Nome"></ion-input>\n                <ion-input [(ngModel)]="email" class="email" type="email" placeholder="E-mail"></ion-input>\n                <ion-input [(ngModel)]="senha" class="senha" type="password" placeholder="Senha"></ion-input>\n                <ion-select [(ngModel)]="salas" class="salas" placeholder="Selecione uma Sala" [selectOptions]="selectOptions" multiple="true">\n                    <div *ngFor="let salas of sala; let i = index">\n                        <ion-option value="{{sala[i].roomId}}">{{sala[i].roomName}}</ion-option>\n                    </div>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-12>\n                <button class="button_salvar" ion-button full (click)="adicionarAtendente()">Salvar</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/sympla/Projetos/studio/src/pages/atendente/add-atendente/add-atendente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__domain_usuario_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_4__domain_sala_sala_service__["a" /* SalaService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */]])
    ], AddAtendentePage);
    return AddAtendentePage;
}());

//# sourceMappingURL=add-atendente.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAtendentePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nova_senha_atendente_nova_senha_atendente__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_sala_sala_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_usuario_usuario_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__atendente__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditAtendentePage = /** @class */ (function () {
    function EditAtendentePage(navCtrl, salaService, usuarioService, _alertCtrl, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.salaService = salaService;
        this.usuarioService = usuarioService;
        this._alertCtrl = _alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.sala = [];
        this.id = this.navParams.data;
        this.selectOptions = {
            title: 'Escolha uma sala',
            subTitle: 'É possível selecionar multiplas salas',
            mode: 'md'
        };
    }
    EditAtendentePage.prototype.ngOnInit = function () {
        var _this = this;
        document.querySelector(".tabbar").setAttribute("style", "z-index:-1");
        var loading = this.loadingCtrl.create({
            content: 'Buscando...'
        });
        loading.present();
        this.salaService
            .listarSalas()
            .then(function (user) {
            _this.sala = user.data;
            console.log(_this.sala);
            loading.dismiss();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    EditAtendentePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Buscando...'
        });
        loading.present();
        this.usuarioService
            .buscarAtendente(this.id)
            .then(function (user) {
            _this.nome = user.data.userName;
            _this.nomeDesatualizado = user.data.userName;
            _this.email = user.data.userEmail;
            _this.emailDesatualizado = user.data.userEmail;
            loading.dismiss();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    EditAtendentePage.prototype.updateAtendente = function () {
        var _this = this;
        if (this.nome !== this.nomeDesatualizado || this.email !== this.emailDesatualizado) {
            var alert_1 = this._alertCtrl.create({
                title: 'Editar Atendente!',
                message: 'Deseja editar este Atendente?',
                buttons: [
                    {
                        text: 'Não',
                        role: 'Não'
                    },
                    {
                        text: 'Sim',
                        role: 'Sim',
                        handler: function () {
                            _this.usuarioService
                                .editartUsuario(_this.id, _this.nome, _this.email, _this.salas)
                                .then(function (user) {
                                if (user.msg === "Dados atualizados com sucesso") {
                                    _this._alertCtrl
                                        .create({
                                        title: "Atendente atualizado com Sucesso.",
                                        buttons: [
                                            {
                                                text: "Ok",
                                                handler: function () {
                                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__atendente__["a" /* AtendentePage */]);
                                                }
                                            }
                                        ]
                                    })
                                        .present();
                                }
                                else {
                                    _this._alertCtrl
                                        .create({
                                        title: "Erro inesperado, constatar o Igor",
                                        buttons: [{ text: "Ok" }]
                                    })
                                        .present();
                                }
                            })
                                .catch(function (error) {
                                _this._alertCtrl
                                    .create({
                                    title: "Erro inesperado, constatar o Igor",
                                    buttons: [{ text: "Ok" }]
                                })
                                    .present();
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            this._alertCtrl
                .create({
                title: "Nenhuma alteração feita!",
                buttons: [{ text: "Ok" }]
            })
                .present();
        }
    };
    EditAtendentePage.prototype.novaSenha = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__nova_senha_atendente_nova_senha_atendente__["a" /* NovaSenhaAtendentePage */], this.id);
    };
    EditAtendentePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-edit-atendente',template:/*ion-inline-start:"/Users/sympla/Projetos/studio/src/pages/atendente/edit-atendente/edit-atendente.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Editar Atendente</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-12 class="formulario">\n                <ion-input [(ngModel)]="nome" class="nome" type="text" placeholder="Nome">{{nome}}</ion-input>\n                <ion-input [(ngModel)]="email" class="email" type="email" placeholder="E-mail">{{email}}</ion-input>\n                <ion-select [(ngModel)]="salas" class="salas" placeholder="Selecione uma Sala" [selectOptions]="selectOptions" multiple="true">\n                    <div *ngFor="let salas of sala; let i = index">\n                        <ion-option value="{{sala[i].roomId}}">{{sala[i].roomName}}</ion-option>\n                    </div>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-12>\n                <button class="button_salvar" ion-button full (click)="updateAtendente()">Salvar</button>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-12>\n                <button class="button_alterar_senha" ion-button full (click)="novaSenha()">Alterar Senha</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/sympla/Projetos/studio/src/pages/atendente/edit-atendente/edit-atendente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__domain_sala_sala_service__["a" /* SalaService */],
            __WEBPACK_IMPORTED_MODULE_2__domain_usuario_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */]])
    ], EditAtendentePage);
    return EditAtendentePage;
}());

//# sourceMappingURL=edit-atendente.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovaSenhaAtendentePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__atendente__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_usuario_usuario_service__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NovaSenhaAtendentePage = /** @class */ (function () {
    function NovaSenhaAtendentePage(navCtrl, _alertCtrl, loadingCtrl, usuarioService, navParams) {
        this.navCtrl = navCtrl;
        this._alertCtrl = _alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.usuarioService = usuarioService;
        this.navParams = navParams;
        this.senhaAntiga = 0;
        this.id = this.navParams.data;
    }
    NovaSenhaAtendentePage.prototype.ionViewDidLoad = function () {
        document.querySelector(".tabbar").setAttribute("style", "z-index:-1");
        console.log('ionViewDidLoad NovaSenhaAtendentePage');
    };
    NovaSenhaAtendentePage.prototype.atualizarSenha = function () {
        var _this = this;
        if (this.novaSenha === this.confirmarSenha) {
            var alert_1 = this._alertCtrl.create({
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
                        handler: function () {
                            _this.usuarioService
                                .atualizarSenha(_this.id, _this.novaSenha, _this.senhaAntiga)
                                .then(function (user) {
                                if (user.msg === "Senha alterada com sucesso") {
                                    _this._alertCtrl
                                        .create({
                                        title: "Atualizado com sucesso!",
                                        buttons: [{ text: "Ok" }]
                                    })
                                        .present();
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__atendente__["a" /* AtendentePage */]);
                                }
                                else {
                                    _this._alertCtrl
                                        .create({
                                        title: "Erro inesperado, constatar o Igor",
                                        buttons: [{ text: "Ok" }]
                                    })
                                        .present();
                                }
                            })
                                .catch(function (error) {
                                console.log(error);
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            this._alertCtrl
                .create({
                title: "Senha diferentes.",
                subTitle: "A senha estão diferentes!",
                buttons: [{ text: "Ok" }]
            })
                .present();
        }
    };
    NovaSenhaAtendentePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nova-senha-atendente',template:/*ion-inline-start:"/Users/sympla/Projetos/studio/src/pages/atendente/nova-senha-atendente/nova-senha-atendente.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Atualizar Senha</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-row>\n        <ion-col col-12 class="campos">\n            <ion-input [(ngModel)]="novaSenha" class="novaSenha" placeholder="Nova Senha" type="password"></ion-input>\n            <ion-input [(ngModel)]="confirmarSenha" class="confirmarSenha" placeholder="Confirmar Senha" type="password"></ion-input>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-12>\n            <button class="button_salvar" full ion-button round (click)="atualizarSenha()">Alterar Senha</button>\n        </ion-col>\n    </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/sympla/Projetos/studio/src/pages/atendente/nova-senha-atendente/nova-senha-atendente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__domain_usuario_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], NovaSenhaAtendentePage);
    return NovaSenhaAtendentePage;
}());

//# sourceMappingURL=nova-senha-atendente.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_usuario_usuario_service__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, _alertCtrl, loadingCtrl, usuarioService) {
        this.navCtrl = navCtrl;
        this._alertCtrl = _alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.usuarioService = usuarioService;
    }
    PerfilPage_1 = PerfilPage;
    PerfilPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        this.id = localStorage.getItem('idUsuario');
        this.usuarioService.buscarAtendente(this.id)
            .then(function (user) {
            _this.nome = user.data.userName;
            loading.dismiss();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    PerfilPage.prototype.atualizarSenha = function () {
        var _this = this;
        if (this.novaSenha === this.confirmarSenha) {
            var alert_1 = this._alertCtrl.create({
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
                        handler: function () {
                            _this.id = 0;
                            _this.usuarioService
                                .atualizarSenha(_this.id, _this.novaSenha, _this.senhaAntiga)
                                .then(function (user) {
                                if (user.msg === "Senha alterada com sucesso") {
                                    _this._alertCtrl
                                        .create({
                                        title: "Erro inesperado, constatar o Igor",
                                        buttons: [{ text: "Ok" }]
                                    })
                                        .present();
                                    _this.navCtrl.setRoot(PerfilPage_1);
                                }
                                else if (user.msg === "Falha ao alterar senha") {
                                    _this._alertCtrl
                                        .create({
                                        title: "Falha, verifique a senhas e faça novamente!",
                                        buttons: [{ text: "Ok" }]
                                    })
                                        .present();
                                }
                                else {
                                    _this._alertCtrl
                                        .create({
                                        title: "Erro inesperado, constatar o Igor",
                                        buttons: [{ text: "Ok" }]
                                    })
                                        .present();
                                }
                            })
                                .catch(function (error) {
                                console.log(error);
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            this._alertCtrl
                .create({
                title: "Senha diferentes.",
                subTitle: "A senha estão diferentes!",
                buttons: [{ text: "Ok" }]
            })
                .present();
        }
    };
    PerfilPage.prototype.sair = function () {
        document.querySelector(".tabbar").setAttribute("style", "z-index:-1");
        localStorage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
    };
    PerfilPage = PerfilPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"/Users/sympla/Projetos/studio/src/pages/perfil/perfil.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n        <div class="perfilsair">\n            <ion-title>Perfil</ion-title>\n            <p class="button_sair">\n                <ion-icon name="exit" (click)="sair()"></ion-icon>\n            </p>\n        </div>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <div class="nome-perfil">\n        <div class="letra-nome">\n            <h2 class="first">{{nome}}</h2>\n        </div>\n        <h1>{{nome}}</h1>\n    </div>\n    <ion-row>\n        <ion-col col-12 class="campos">\n            <ion-input [(ngModel)]="senhaAntiga" class="senhaAntiga" placeholder="Senha Antiga" type="password"></ion-input>\n            <ion-input [(ngModel)]="novaSenha" class="novaSenha" placeholder="Nova Senha" type="password"></ion-input>\n            <ion-input [(ngModel)]="confirmarSenha" class="confirmarSenha" placeholder="Confirmar Senha" type="password"></ion-input>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-12>\n            <button class="button_salvar" full ion-button round (click)="atualizarSenha()">Alterar Senha</button>\n        </ion-col>\n    </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/sympla/Projetos/studio/src/pages/perfil/perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__domain_usuario_usuario_service__["a" /* UsuarioService */]])
    ], PerfilPage);
    return PerfilPage;
    var PerfilPage_1;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_usuario_usuario_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loadingCtrl, usuarioService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.usuarioService = usuarioService;
        this.id = localStorage.getItem('idUsuario');
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        this.usuarioService.buscarAtendente(this.id)
            .then(function (user) {
            _this.nome = user.data.userName;
            loading.dismiss();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.sair = function () {
        document.querySelector(".tabbar").setAttribute("style", "z-index:-1");
        localStorage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/sympla/Projetos/studio/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <div class="homesair">\n            <img id="home-image" src="../../assets/imgs/logo_home.png" alt="imagenotavailable">\n            <p class="button_sair">\n                <ion-icon name="exit" (click)="sair()"></ion-icon>\n            </p>\n        </div>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-row>\n        <ion-col size="12">\n            <p class="mensagem"> Olá <b>{{nome}}</b>, você tem 00 atendimentos serem realizados essa semana</p>\n        </ion-col>\n    </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/sympla/Projetos/studio/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__domain_usuario_usuario_service__["a" /* UsuarioService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_evento_add_evento__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_locales_pt_PT__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





Object(__WEBPACK_IMPORTED_MODULE_4__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_3__angular_common_locales_pt_PT__["a" /* default */]);
var CalendarioPage = /** @class */ (function () {
    function CalendarioPage(navCtrl, actionSheetCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.selectedDay = new Date();
        this.eventSource = [];
        this.calendarModes = [
            { key: 'month', value: 'Mês' },
            { key: 'week', value: 'Semana' },
            { key: 'day', value: 'Dia' },
        ];
        this.calendar = {
            mode: this.calendarModes[0].key,
            currentDate: new Date()
        }; // these are the variable used by the calendar.
        this.markDisabled = function (date) {
            var current = new Date();
            current.setHours(0, 0, 0);
            return (date < current);
        };
        // this.markDisabled(new Date(2017, 12, 25))
    }
    CalendarioPage.prototype.loadEvents = function () {
        // this.eventSource = this.createRandomEvents();
    };
    CalendarioPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    CalendarioPage.prototype.onEventSelected = function (event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    };
    CalendarioPage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    CalendarioPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    CalendarioPage.prototype.onTimeSelected = function (ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
        this.selectedObject = ev;
        // this.openActionSheet(ev)
    };
    CalendarioPage.prototype.onCurrentDateChanged = function (event) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
        this.selectedDay = event;
    };
    CalendarioPage.prototype.onRangeChanged = function (ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    };
    CalendarioPage.prototype.openActionSheet = function (event) {
        var _this = this;
        console.log('opening');
        var actionsheet = this.actionSheetCtrl.create({
            title: "Choose Option",
            buttons: [
                {
                    text: 'Block Date',
                    handler: function () {
                        console.log("Block Date Clicked: ", event);
                        var d = event.selectedTime;
                        //d.setHours(0, 0, 0);
                        setTimeout(function () {
                            _this.blockDayEvent(d);
                        }, 2);
                    }
                },
                {
                    text: 'Meet Up With',
                    handler: function () {
                        console.log("Meet Up With Clicked");
                    }
                }
            ]
        });
        actionsheet.present();
    };
    CalendarioPage.prototype.blockDayEvent = function (date) {
        var _this = this;
        var startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
        var endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
        var events = this.eventSource;
        events.push({
            title: 'All Day ',
            startTime: startTime,
            endTime: endTime,
            allDay: true
        });
        this.eventSource = [];
        setTimeout(function () {
            _this.eventSource = events;
        });
    };
    CalendarioPage.prototype.addEvent = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__add_evento_add_evento__["a" /* AddEventoPage */], { selectedDay: this.selectedDay });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                var eventData = data;
                eventData.startTime = new Date(data.startTime);
                eventData.endTime = new Date(data.endTime);
                var events_1 = _this.eventSource;
                events_1.push(eventData);
                _this.eventSource = [];
                setTimeout(function () {
                    _this.eventSource = events_1;
                });
            }
        });
    };
    CalendarioPage.prototype.onOptionSelected = function ($event) {
        console.log($event);
        //this.calendar.mode = $event
    };
    CalendarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush,
            selector: 'page-calendario',template:/*ion-inline-start:"/Users/sympla/Projetos/studio/src/pages/calendario/calendario.html"*/'<ng-template #monthviewEventDetailTemplate let-showEventDetail="showEventDetail" let-selectedDate="selectedDate" let-noEventsLabel="noEventsLabel">\n    <ion-list class="event-detail-container" has-bouncing="false" *ngIf="showEventDetail" overflow-scroll="false">\n        <ion-item *ngFor="let event of selectedDate?.events" (click)="eventSelected(event)">\n            <span *ngIf="!event.allDay" class="monthview-eventdetail-timecolumn">{{event.startTime|date: \'HH:mm\'}}\n                    -\n                    {{event.endTime|date: \'HH:mm\'}}\n                </span>\n            <span *ngIf="event.allDay" class="monthview-eventdetail-timecolumn">Dia inteiro</span>\n            <span class="event-detail">  |  {{event.title}}</span>\n        </ion-item>\n        <ion-item *ngIf="selectedDate?.events.length==0">\n            <div class="no-events-label">{{noEventsLabel}}</div>\n        </ion-item>\n    </ion-list>\n</ng-template>\n\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{viewTitle}}</ion-title>\n        <ion-buttons end>\n            <button ion-button [disabled]="isToday" (click)="today()">Hoje</button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="has-header">\n    <ion-row ion-content>\n        <ion-col col-9>\n            <button ion-button small (click)="addEvent()">Adicionar</button>\n        </ion-col>\n        <ion-col col-3>\n            <ion-select [(ngModel)]="calendar.mode" style="max-width: 100%">\n                <ion-option (ionSelect)="onOptionSelected($event)" *ngFor="let mode of calendarModes" [value]="mode.key">{{mode.value}}\n                </ion-option>\n            </ion-select>\n        </ion-col>\n    </ion-row>\n    <!-- <p>{{selectedObject | json}}</p> -->\n    <!-- <p>{{eventSource | json}}</p> -->\n    <calendar [monthviewEventDetailTemplate]="template" [eventSource]="eventSource" [markDisabled]="markDisabled" [calendarMode]="calendar.mode" [currentDate]="calendar.currentDate" (onCurrentDateChanged)="onCurrentDateChanged($event)" (onEventSelected)="onEventSelected($event)"\n        (onTitleChanged)="onViewTitleChanged($event)" (onTimeSelected)="onTimeSelected($event)" step="30">\n    </calendar>\n</ion-content>'/*ion-inline-end:"/Users/sympla/Projetos/studio/src/pages/calendario/calendario.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], CalendarioPage);
    return CalendarioPage;
}());

//# sourceMappingURL=calendario.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSalaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sala__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_sala_sala_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditSalaPage = /** @class */ (function () {
    function EditSalaPage(navCtrl, salaService, _alertCtrl, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.salaService = salaService;
        this._alertCtrl = _alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.id = this.navParams.data;
    }
    EditSalaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        document.querySelector(".tabbar").setAttribute("style", "z-index:-1");
        var loading = this.loadingCtrl.create({
            content: 'Buscando...'
        });
        loading.present();
        this.salaService
            .buscarSala(this.id)
            .then(function (user) {
            _this.nome = user.data.roomName;
            _this.nomeDesatualizado = user.data.roomName;
            loading.dismiss();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    EditSalaPage.prototype.updateSala = function () {
        var _this = this;
        if (this.nome !== this.nomeDesatualizado) {
            var alert_1 = this._alertCtrl.create({
                title: 'Editar Sala!',
                message: 'Tem certeza que deseja editar essa Sala?',
                buttons: [
                    {
                        text: 'Não',
                        role: 'Não'
                    },
                    {
                        text: 'Sim',
                        role: 'Sim',
                        handler: function () {
                            _this.salaService
                                .editarSala(_this.id, _this.nome)
                                .then(function (user) {
                                if (user.msg === "Dados atualizados com sucesso") {
                                    _this._alertCtrl
                                        .create({
                                        title: "Atualizado com Sucesso.",
                                        buttons: [
                                            {
                                                text: "Ok",
                                                handler: function () {
                                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__sala__["a" /* SalaPage */]);
                                                }
                                            }
                                        ]
                                    })
                                        .present();
                                }
                                else {
                                    _this._alertCtrl
                                        .create({
                                        title: "Erro inesperado, constatar o Igor",
                                        buttons: [{ text: "Ok" }]
                                    })
                                        .present();
                                }
                            })
                                .catch(function (error) {
                                _this._alertCtrl
                                    .create({
                                    title: "Erro inesperado, constatar o Igor",
                                    buttons: [{ text: "Ok" }]
                                })
                                    .present();
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            this._alertCtrl
                .create({
                title: "Nenhuma alteração feita!",
                buttons: [{ text: "Ok" }]
            })
                .present();
        }
    };
    EditSalaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-edit-sala',template:/*ion-inline-start:"/Users/sympla/Projetos/studio/src/pages/sala/edit-sala/edit-sala.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Editar Sala</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-12 class="formulario">\n                <ion-input [(ngModel)]="nome" class="nome" type="text" placeholder="Nome">{{nome}}</ion-input>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-12>\n                <button class="button_salvar" ion-button full (click)="updateSala()">Salvar</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/sympla/Projetos/studio/src/pages/sala/edit-sala/edit-sala.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__domain_sala_sala_service__["a" /* SalaService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */]])
    ], EditSalaPage);
    return EditSalaPage;
}());

//# sourceMappingURL=edit-sala.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSalaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sala__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_sala_sala_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddSalaPage = /** @class */ (function () {
    function AddSalaPage(navCtrl, salaService, _alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.salaService = salaService;
        this._alertCtrl = _alertCtrl;
        this.navParams = navParams;
    }
    AddSalaPage.prototype.ionViewDidLoad = function () {
        document.querySelector(".tabbar").setAttribute("style", "z-index:-1");
        console.log('ionViewDidLoad AddSalaPage');
    };
    AddSalaPage.prototype.addSala = function () {
        var _this = this;
        var alert = this._alertCtrl.create({
            title: 'Adicionar Sala!',
            message: 'Dados inseridos corretamente?',
            buttons: [
                {
                    text: 'Não',
                    role: 'Não'
                },
                {
                    text: 'Sim',
                    role: 'Sim',
                    handler: function () {
                        _this.salaService
                            .adicionandoSala(_this.nome)
                            .then(function (user) {
                            if (user.msg === "Sala inserida com sucesso") {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__sala__["a" /* SalaPage */]);
                            }
                            else {
                                _this._alertCtrl
                                    .create({
                                    title: "Erro inesperado, constatar o Igor",
                                    buttons: [{ text: "Ok" }]
                                })
                                    .present();
                            }
                        })
                            .catch(function (error) {
                            console.log(error);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    AddSalaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-add-sala',template:/*ion-inline-start:"/Users/sympla/Projetos/studio/src/pages/sala/add-sala/add-sala.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Adicionar Sala</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-12 class="formulario">\n                <ion-input class="nome" [(ngModel)]="nome" class="nome" type="text" placeholder="Nome"></ion-input>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-12>\n                <button class="button_salvar" ion-button full (click)="addSala()">Salvar</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/sympla/Projetos/studio/src/pages/sala/add-sala/add-sala.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__domain_sala_sala_service__["a" /* SalaService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */]])
    ], AddSalaPage);
    return AddSalaPage;
}());

//# sourceMappingURL=add-sala.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(367);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_usuario_usuario_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_login_login_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_calendario_add_evento_add_evento__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_atendente_add_atendente_add_atendente__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sala_sala__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_calendario_calendario__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_atendente_atendente__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_perfil_perfil__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_sala_edit_sala_edit_sala__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_sala_add_sala_add_sala__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_atendente_edit_atendente_edit_atendente__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__domain_sala_sala_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_server_server__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ionic2_calendar__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_common_locales_pt_PT__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_atendente_nova_senha_atendente_nova_senha_atendente__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























Object(__WEBPACK_IMPORTED_MODULE_26__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_25__angular_common_locales_pt_PT__["a" /* default */]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_calendario_calendario__["a" /* CalendarioPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_atendente_atendente__["a" /* AtendentePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sala_sala__["a" /* SalaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_sala_edit_sala_edit_sala__["a" /* EditSalaPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_sala_add_sala_add_sala__["a" /* AddSalaPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_atendente_edit_atendente_edit_atendente__["a" /* EditAtendentePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_atendente_add_atendente_add_atendente__["a" /* AddAtendentePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_calendario_add_evento_add_evento__["a" /* AddEventoPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_atendente_nova_senha_atendente_nova_senha_atendente__["a" /* NovaSenhaAtendentePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_24_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_calendario_calendario__["a" /* CalendarioPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_atendente_atendente__["a" /* AtendentePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sala_sala__["a" /* SalaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_sala_edit_sala_edit_sala__["a" /* EditSalaPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_sala_add_sala_add_sala__["a" /* AddSalaPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_atendente_edit_atendente_edit_atendente__["a" /* EditAtendentePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_atendente_add_atendente_add_atendente__["a" /* AddAtendentePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_calendario_add_evento_add_evento__["a" /* AddEventoPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_atendente_nova_senha_atendente_nova_senha_atendente__["a" /* NovaSenhaAtendentePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_3__domain_login_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_22__domain_sala_sala_service__["a" /* SalaService */],
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_2__domain_usuario_usuario_service__["a" /* UsuarioService */],
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_core__["G" /* LOCALE_ID */], useValue: 'pt-PT' },
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__providers_server_server__["a" /* ServerProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_server_server__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SalaService = /** @class */ (function () {
    function SalaService(_http, _service) {
        this._http = _http;
        this._service = _service;
        this.token = localStorage.getItem('token');
    }
    SalaService.prototype.listarSalas = function () {
        var api = this._service.URL_API + "controller=room&action=list";
        var data = {};
        var header = {
            "Content-Type": "application/json",
            "Authorization": this.token
        };
        return this._http
            .get(api, data, header)
            .then(function (dado) {
            var listSala = JSON.parse(dado.data);
            return listSala;
        })
            .catch(function (error) {
            var resposta = JSON.parse(error.error);
            return resposta;
        });
    };
    SalaService.prototype.adicionandoSala = function (roomName) {
        var api = this._service.URL_API + "controller=room&action=insert";
        var data = {
            "roomName": roomName
        };
        var header = {
            "Content-Type": "application/json",
            "Authorization": this.token
        };
        this._http.setDataSerializer('json');
        return this._http
            .post(api, data, header)
            .then(function (dado) {
            var addSala = JSON.parse(dado.data);
            return addSala;
        })
            .catch(function (error) {
            var resposta = JSON.parse(error.error);
            return resposta;
        });
    };
    SalaService.prototype.buscarSala = function (id) {
        var api = this._service.URL_API + "controller=room&action=get&key=" + ("" + id);
        var data = {};
        var header = {
            "Content-Type": "application/json",
            "Authorization": this.token
        };
        return this._http
            .get(api, data, header)
            .then(function (dado) {
            var dadosSala = JSON.parse(dado.data);
            return dadosSala;
        })
            .catch(function (error) {
            var resposta = JSON.parse(error.error);
            return resposta;
        });
    };
    SalaService.prototype.editarSala = function (id, roomName) {
        var api = this._service.URL_API + "controller=room&action=update";
        var data = {
            "roomId": id,
            "roomName": roomName
        };
        var header = {
            "Content-Type": "application/json",
            "Authorization": this.token
        };
        this._http.setDataSerializer('json');
        return this._http
            .put(api, data, header)
            .then(function (dado) {
            var updateSala = JSON.parse(dado.data);
            return updateSala;
        })
            .catch(function (error) {
            var resposta = JSON.parse(error.error);
            return resposta;
        });
    };
    SalaService.prototype.excluirSala = function (id) {
        var api = this._service.URL_API + "controller=room&action=delete&key=" + ("" + id);
        var data = {};
        var header = {
            "Content-Type": "application/json",
            "Authorization": this.token
        };
        this._http.setDataSerializer('json');
        return this._http
            .delete(api, data, header)
            .then(function (dado) {
            var exluirSala = JSON.parse(dado.data);
            return exluirSala;
        })
            .catch(function (error) {
            var resposta = JSON.parse(error.error);
            return resposta;
        });
    };
    SalaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_1__providers_server_server__["a" /* ServerProvider */]])
    ], SalaService);
    return SalaService;
}());

//# sourceMappingURL=sala_service.js.map

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 208,
	"./af.js": 208,
	"./ar": 209,
	"./ar-dz": 210,
	"./ar-dz.js": 210,
	"./ar-kw": 211,
	"./ar-kw.js": 211,
	"./ar-ly": 212,
	"./ar-ly.js": 212,
	"./ar-ma": 213,
	"./ar-ma.js": 213,
	"./ar-sa": 214,
	"./ar-sa.js": 214,
	"./ar-tn": 215,
	"./ar-tn.js": 215,
	"./ar.js": 209,
	"./az": 216,
	"./az.js": 216,
	"./be": 217,
	"./be.js": 217,
	"./bg": 218,
	"./bg.js": 218,
	"./bm": 219,
	"./bm.js": 219,
	"./bn": 220,
	"./bn.js": 220,
	"./bo": 221,
	"./bo.js": 221,
	"./br": 222,
	"./br.js": 222,
	"./bs": 223,
	"./bs.js": 223,
	"./ca": 224,
	"./ca.js": 224,
	"./cs": 225,
	"./cs.js": 225,
	"./cv": 226,
	"./cv.js": 226,
	"./cy": 227,
	"./cy.js": 227,
	"./da": 228,
	"./da.js": 228,
	"./de": 229,
	"./de-at": 230,
	"./de-at.js": 230,
	"./de-ch": 231,
	"./de-ch.js": 231,
	"./de.js": 229,
	"./dv": 232,
	"./dv.js": 232,
	"./el": 233,
	"./el.js": 233,
	"./en-SG": 234,
	"./en-SG.js": 234,
	"./en-au": 235,
	"./en-au.js": 235,
	"./en-ca": 236,
	"./en-ca.js": 236,
	"./en-gb": 237,
	"./en-gb.js": 237,
	"./en-ie": 238,
	"./en-ie.js": 238,
	"./en-il": 239,
	"./en-il.js": 239,
	"./en-nz": 240,
	"./en-nz.js": 240,
	"./eo": 241,
	"./eo.js": 241,
	"./es": 242,
	"./es-do": 243,
	"./es-do.js": 243,
	"./es-us": 244,
	"./es-us.js": 244,
	"./es.js": 242,
	"./et": 245,
	"./et.js": 245,
	"./eu": 246,
	"./eu.js": 246,
	"./fa": 247,
	"./fa.js": 247,
	"./fi": 248,
	"./fi.js": 248,
	"./fo": 249,
	"./fo.js": 249,
	"./fr": 250,
	"./fr-ca": 251,
	"./fr-ca.js": 251,
	"./fr-ch": 252,
	"./fr-ch.js": 252,
	"./fr.js": 250,
	"./fy": 253,
	"./fy.js": 253,
	"./ga": 254,
	"./ga.js": 254,
	"./gd": 255,
	"./gd.js": 255,
	"./gl": 256,
	"./gl.js": 256,
	"./gom-latn": 257,
	"./gom-latn.js": 257,
	"./gu": 258,
	"./gu.js": 258,
	"./he": 259,
	"./he.js": 259,
	"./hi": 260,
	"./hi.js": 260,
	"./hr": 261,
	"./hr.js": 261,
	"./hu": 262,
	"./hu.js": 262,
	"./hy-am": 263,
	"./hy-am.js": 263,
	"./id": 264,
	"./id.js": 264,
	"./is": 265,
	"./is.js": 265,
	"./it": 266,
	"./it-ch": 267,
	"./it-ch.js": 267,
	"./it.js": 266,
	"./ja": 268,
	"./ja.js": 268,
	"./jv": 269,
	"./jv.js": 269,
	"./ka": 270,
	"./ka.js": 270,
	"./kk": 271,
	"./kk.js": 271,
	"./km": 272,
	"./km.js": 272,
	"./kn": 273,
	"./kn.js": 273,
	"./ko": 274,
	"./ko.js": 274,
	"./ku": 275,
	"./ku.js": 275,
	"./ky": 276,
	"./ky.js": 276,
	"./lb": 277,
	"./lb.js": 277,
	"./lo": 278,
	"./lo.js": 278,
	"./lt": 279,
	"./lt.js": 279,
	"./lv": 280,
	"./lv.js": 280,
	"./me": 281,
	"./me.js": 281,
	"./mi": 282,
	"./mi.js": 282,
	"./mk": 283,
	"./mk.js": 283,
	"./ml": 284,
	"./ml.js": 284,
	"./mn": 285,
	"./mn.js": 285,
	"./mr": 286,
	"./mr.js": 286,
	"./ms": 287,
	"./ms-my": 288,
	"./ms-my.js": 288,
	"./ms.js": 287,
	"./mt": 289,
	"./mt.js": 289,
	"./my": 290,
	"./my.js": 290,
	"./nb": 291,
	"./nb.js": 291,
	"./ne": 292,
	"./ne.js": 292,
	"./nl": 293,
	"./nl-be": 294,
	"./nl-be.js": 294,
	"./nl.js": 293,
	"./nn": 295,
	"./nn.js": 295,
	"./pa-in": 296,
	"./pa-in.js": 296,
	"./pl": 297,
	"./pl.js": 297,
	"./pt": 298,
	"./pt-br": 299,
	"./pt-br.js": 299,
	"./pt.js": 298,
	"./ro": 300,
	"./ro.js": 300,
	"./ru": 301,
	"./ru.js": 301,
	"./sd": 302,
	"./sd.js": 302,
	"./se": 303,
	"./se.js": 303,
	"./si": 304,
	"./si.js": 304,
	"./sk": 305,
	"./sk.js": 305,
	"./sl": 306,
	"./sl.js": 306,
	"./sq": 307,
	"./sq.js": 307,
	"./sr": 308,
	"./sr-cyrl": 309,
	"./sr-cyrl.js": 309,
	"./sr.js": 308,
	"./ss": 310,
	"./ss.js": 310,
	"./sv": 311,
	"./sv.js": 311,
	"./sw": 312,
	"./sw.js": 312,
	"./ta": 313,
	"./ta.js": 313,
	"./te": 314,
	"./te.js": 314,
	"./tet": 315,
	"./tet.js": 315,
	"./tg": 316,
	"./tg.js": 316,
	"./th": 317,
	"./th.js": 317,
	"./tl-ph": 318,
	"./tl-ph.js": 318,
	"./tlh": 319,
	"./tlh.js": 319,
	"./tr": 320,
	"./tr.js": 320,
	"./tzl": 321,
	"./tzl.js": 321,
	"./tzm": 322,
	"./tzm-latn": 323,
	"./tzm-latn.js": 323,
	"./tzm.js": 322,
	"./ug-cn": 324,
	"./ug-cn.js": 324,
	"./uk": 325,
	"./uk.js": 325,
	"./ur": 326,
	"./ur.js": 326,
	"./uz": 327,
	"./uz-latn": 328,
	"./uz-latn.js": 328,
	"./uz.js": 327,
	"./vi": 329,
	"./vi.js": 329,
	"./x-pseudo": 330,
	"./x-pseudo.js": 330,
	"./yo": 331,
	"./yo.js": 331,
	"./zh-cn": 332,
	"./zh-cn.js": 332,
	"./zh-hk": 333,
	"./zh-hk.js": 333,
	"./zh-tw": 334,
	"./zh-tw.js": 334
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 421;

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, events, statusBar, splashScreen) {
        var _this = this;
        this.platform = platform;
        this.events = events;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = '';
        this.showSplash = true;
        platform.ready().then(function () {
            statusBar.overlaysWebView(false);
            statusBar.backgroundColorByHexString('#ccc');
            _this.token = localStorage.getItem('token');
            if (_this.token) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */];
            }
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/sympla/Projetos/studio/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/sympla/Projetos/studio/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 427:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtendentePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_atendente_edit_atendente__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_usuario_usuario_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_atendente_add_atendente__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AtendentePage = /** @class */ (function () {
    function AtendentePage(navCtrl, usuarioService, _alertCtrl, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.usuarioService = usuarioService;
        this._alertCtrl = _alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.usuario = [];
        this.inativado = true;
    }
    AtendentePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        document.querySelector(".tabbar").setAttribute("style", "z-index:1");
        var loading = this.loadingCtrl.create({
            content: 'Buscando...'
        });
        loading.present();
        this.usuarioService
            .listarUsuarios()
            .then(function (user) {
            _this.usuario = user.data;
            console.log(_this.usuario);
            loading.dismiss();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AtendentePage.prototype.addAtendente = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_atendente_add_atendente__["a" /* AddAtendentePage */]);
    };
    AtendentePage.prototype.editar = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__edit_atendente_edit_atendente__["a" /* EditAtendentePage */], id);
    };
    AtendentePage.prototype.inativar = function (id) {
        var _this = this;
        var alert = this._alertCtrl.create({
            title: 'Inativar o Atendente!',
            message: 'Deseja inativar este Atendente?',
            buttons: [
                {
                    text: 'Não',
                    role: 'Não'
                },
                {
                    text: 'Sim',
                    role: 'Sim',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: 'Carregando...'
                        });
                        loading.present();
                        _this.usuarioService
                            .inativarUsuario(id)
                            .then(function (user) {
                            if (user.msg === "Usuário inativado com sucesso") {
                                _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                                _this.inativado === true;
                                loading.dismiss();
                            }
                            else {
                                var alert_1 = _this._alertCtrl.create({
                                    title: 'Erro não esperado!',
                                    subTitle: 'Entre em contato com o Igor',
                                    buttons: ['Ok']
                                });
                                alert_1.present();
                                _this.inativado === false;
                            }
                        })
                            .catch(function (error) {
                            var alert = _this._alertCtrl.create({
                                title: 'Erro não esperado!',
                                subTitle: 'Entre em contato com o Igor',
                                buttons: ['Ok']
                            });
                            alert.present();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    AtendentePage.prototype.ativar = function (id) {
        var _this = this;
        var alert = this._alertCtrl.create({
            title: 'Ativar o Atendente!',
            message: 'Deseja ativar este atendente?',
            buttons: [
                {
                    text: 'Não',
                    role: 'Não'
                },
                {
                    text: 'Sim',
                    role: 'Sim',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: 'Carregando...'
                        });
                        loading.present();
                        _this.usuarioService
                            .ativarUsuario(id)
                            .then(function (user) {
                            if (user.msg === "Usuário ativado com sucesso") {
                                _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                                _this.inativado === false;
                                loading.dismiss();
                            }
                            else {
                                var alert_2 = _this._alertCtrl.create({
                                    title: 'Erro não esperado!',
                                    subTitle: 'Entre em contato com o Igor',
                                    buttons: ['Ok']
                                });
                                alert_2.present();
                                _this.inativado === true;
                            }
                        })
                            .catch(function (error) {
                            var alert = _this._alertCtrl.create({
                                title: 'Erro nã esperado!',
                                subTitle: 'Entre em contato com o Igor',
                                buttons: ['Ok']
                            });
                            alert.present();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    AtendentePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-atendente',template:/*ion-inline-start:"/Users/sympla/Projetos/studio/src/pages/atendente/atendente.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n        <div class="adicionandoAtendente">\n            <ion-title>Atendentes</ion-title>\n        </div>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card *ngFor="let usuarios of usuario; let i = index">\n        <ion-list *ngIf="usuario[i].userAdmin !== true">\n            <ion-item>\n                <div class="lista_atendente">\n                    <div class="nome-perfil">\n                        <div class="letra-nome">\n                            <h2 class="first">{{usuario[i].userName}}</h2>\n                        </div>\n                    </div>\n                    <div class="atendente" (click)="editar(usuario[i].userId)">\n                        <p class="nome_atendente">{{usuario[i].userName}}</p>\n                        <p class="email_atendente">{{usuario[i].userEmail}}</p>\n                    </div>\n                    <div class="botao_inativa_ative">\n                        <p class="botao_inativar" *ngIf="usuario[i].userStatus === \'1\'" (click)="inativar(usuario[i].userId)">\n                            <ion-icon name="unlock"></ion-icon>\n                        </p>\n                        <p class="botao_ativar" *ngIf="usuario[i].userStatus === \'0\'" (click)="ativar(usuario[i].userId)">\n                            <ion-icon name="lock"></ion-icon>\n                        </p>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n    </ion-card>\n    <p class="button_add">\n        <ion-icon name="add" (click)="addAtendente()"></ion-icon>\n    </p>\n</ion-content>'/*ion-inline-end:"/Users/sympla/Projetos/studio/src/pages/atendente/atendente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__domain_usuario_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */]])
    ], AtendentePage);
    return AtendentePage;
}());

//# sourceMappingURL=atendente.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServerProvider = /** @class */ (function () {
    function ServerProvider(http) {
        this.http = http;
        this.URL_API = "http://vitoriabari.com.br/api/index.php?";
        console.log('Hello ServerProvider Provider');
    }
    ServerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ServerProvider);
    return ServerProvider;
}());

//# sourceMappingURL=server.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_login_login_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, appCtrl, loginService, events, _alertCtrl, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.loginService = loginService;
        this.events = events;
        this._alertCtrl = _alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        this.loginService
            .efetuaLogin(this.email, this.password)
            .then(function (user) {
            if (user === "Erro ao fazer login") {
                _this._alertCtrl
                    .create({
                    title: "Problema no login",
                    subTitle: "Email ou senha inválidos. Tente Novamente!",
                    buttons: [{ text: "Ok" }]
                })
                    .present();
                loading.dismiss();
            }
            else {
                localStorage.setItem('userStatus', user.data.userAdmin);
                localStorage.setItem('idUsuario', user.data.userId);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                loading.dismiss();
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/sympla/Projetos/studio/src/pages/login/login.html"*/'<ion-content padding>\n    <ion-grid class="login">\n        <ion-row class="logo">\n            <ion-col col-12>\n                <ion-img class="imagem-login" src="assets/imgs/logo_login.png"></ion-img>\n            </ion-col>\n        </ion-row>\n        <div class="formulario">\n            <ion-row>\n                <ion-col col-12 class="campos">\n                    <ion-input [(ngModel)]="email" class="email" placeholder="E-mail" type="email"></ion-input>\n                    <ion-input [(ngModel)]="password" class="password" placeholder="Senha" type="password"></ion-input>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-12>\n                    <button class="button_login" full ion-button round (click)="login()">Fazer Login</button>\n                </ion-col>\n            </ion-row>\n        </div>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/sympla/Projetos/studio/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_0__domain_login_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_sala_edit_sala__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_sala_sala_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_sala_add_sala__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SalaPage = /** @class */ (function () {
    function SalaPage(navCtrl, salaService, loadingCtrl, _alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.salaService = salaService;
        this.loadingCtrl = loadingCtrl;
        this._alertCtrl = _alertCtrl;
        this.navParams = navParams;
        this.sala = [];
    }
    SalaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        document.querySelector(".tabbar").setAttribute("style", "z-index:1");
        var loading = this.loadingCtrl.create({
            content: 'Buscando...'
        });
        loading.present();
        this.salaService
            .listarSalas()
            .then(function (user) {
            _this.sala = user.data;
            console.log(_this.sala);
            loading.dismiss();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    SalaPage.prototype.addSala = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_sala_add_sala__["a" /* AddSalaPage */]);
    };
    SalaPage.prototype.editar = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__edit_sala_edit_sala__["a" /* EditSalaPage */], id);
    };
    SalaPage.prototype.excluir = function (id) {
        var _this = this;
        var alert = this._alertCtrl.create({
            title: 'Excluir Sala!',
            message: 'Deseja excluir está sala?',
            buttons: [
                {
                    text: 'Não',
                    role: 'Não'
                },
                {
                    text: 'Sim',
                    role: 'Sim',
                    handler: function () {
                        _this.salaService
                            .excluirSala(id)
                            .then(function (user) {
                            console.log(user);
                            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                        })
                            .catch(function (error) {
                            console.log(error);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    SalaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-sala',template:/*ion-inline-start:"/Users/sympla/Projetos/studio/src/pages/sala/sala.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n        <div class="adicionandosala">\n            <ion-title>Salas</ion-title>\n        </div>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card *ngFor="let salas of sala; let i = index">\n        <ion-list>\n            <ion-item>\n                <div class="lista_salas">\n                    <div class="salas">\n                        <p (click)="editar(sala[i].roomId)" class="nome_salas">{{sala[i].roomName}}</p>\n                    </div>\n                    <div class="botao">\n                        <p class="botao_excluir" (click)="excluir(sala[i].roomId)">\n                            <ion-icon name="trash"></ion-icon>\n                        </p>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n    </ion-card>\n    <p class="button_add">\n        <ion-icon name="add" (click)="addSala()"></ion-icon>\n    </p>\n</ion-content>'/*ion-inline-end:"/Users/sympla/Projetos/studio/src/pages/sala/sala.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__domain_sala_sala_service__["a" /* SalaService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */]])
    ], SalaPage);
    return SalaPage;
}());

//# sourceMappingURL=sala.js.map

/***/ })

},[346]);
//# sourceMappingURL=main.js.map
webpackJsonp([0],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_login_login_service__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__esqueci_senha_esqueci_senha__ = __webpack_require__(207);
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
    function LoginPage(navCtrl, loginService, _alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this._alertCtrl = _alertCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loginService
            .efetuaLogin(this.email, this.password)
            .then(function (user) {
            if (user.msg === "Action not found") {
                _this._alertCtrl
                    .create({
                    title: "Problema no login",
                    subTitle: "Email ou senha inválidos. Tente Novamente!",
                    buttons: [{ text: "Ok" }]
                })
                    .present();
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.esqueciSenha = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__esqueci_senha_esqueci_senha__["a" /* EsqueciSenhaPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/sympla/Projetos/fisio-app/app/src/pages/login/login.html"*/'<ion-content padding>\n    <ion-grid>\n        <br><br>\n        <ion-row>\n            <ion-col col-12>\n                <p class="titulo_app">AppAgenda</p>\n            </ion-col>\n        </ion-row>\n        <br><br>\n        <br><br>\n        <br><br>\n        <ion-row>\n            <ion-col col-12 class="formulario">\n                <ion-input [(ngModel)]="email" class="email" placeholder="E-mail" type="email"></ion-input>\n                <ion-input [(ngModel)]="password" class="password" placeholder="Password" type="password"></ion-input>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-12>\n                <p class="esqueci_senha" (click)="esqueciSenha()">Esqueci a Senha</p>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-12>\n                <button class="button_login" ion-button round (click)="login()">Login</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/sympla/Projetos/fisio-app/app/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__domain_login_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_locales_pt_PT__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_evento_add_evento__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





Object(__WEBPACK_IMPORTED_MODULE_3__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_2__angular_common_locales_pt_PT__["a" /* default */]);
var HomePage = /** @class */ (function () {
    function HomePage(navController, modalCtrl) {
        this.navController = navController;
        this.modalCtrl = modalCtrl;
        this.calendar = {
            locale: 'pt-PT',
            mode: 'week',
            currentDate: new Date(),
            dateFormatter: {
                formatMonthViewDay: function (date) {
                    return date.getDate().toString();
                },
                formatMonthViewDayHeader: function (date) {
                    return 'MonMH';
                },
                formatMonthViewTitle: function (date) {
                    return 'testMT';
                },
                formatWeekViewDayHeader: function (date) {
                    return 'MonWH';
                },
                formatWeekViewTitle: function (date) {
                    return 'testWT';
                },
                formatWeekViewHourColumn: function (date) {
                    return 'testWH';
                },
                formatDayViewHourColumn: function (date) {
                    return 'testDH';
                },
                formatDayViewTitle: function (date) {
                    return 'testDT';
                }
            }
        };
        this.markDisabled = function (date) {
            var current = new Date();
            current.setHours(0, 0, 0);
            return date < current;
        };
    }
    HomePage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    HomePage.prototype.onEventSelected = function (event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    };
    HomePage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    HomePage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    HomePage.prototype.onTimeSelected = function (ev) {
        console.log(ev);
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__add_evento_add_evento__["a" /* AddEventoPage */], { ev: ev });
        profileModal.present();
        // console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
        //     (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    };
    HomePage.prototype.onCurrentDateChanged = function (event) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    };
    HomePage.prototype.onRangeChanged = function (ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/sympla/Projetos/fisio-app/app/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>AppAgenda</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="has-header">\n    <div>\n        <div color="primary">\n            <ion-title>{{viewTitle}}</ion-title>\n            <ion-buttons end>\n                <button ion-button [disabled]="isToday" (click)="today()">Hoje</button>\n                <button ion-button (click)="changeMode(\'month\')">M</button>\n                <button ion-button (click)="changeMode(\'week\')">S</button>\n                <button ion-button (click)="changeMode(\'day\')">D</button>\n            </ion-buttons>\n        </div>\n    </div>\n\n    <calendar [eventSource]="eventSource" [locale]="calendar.locale" [calendarMode]="calendar.mode" [currentDate]="calendar.currentDate" (onCurrentDateChanged)="onCurrentDateChanged($event)" (onEventSelected)="onEventSelected($event)" (onTitleChanged)="onViewTitleChanged($event)"\n        (onTimeSelected)="onTimeSelected($event)" startHour="8" endHour="19">\n    </calendar>\n</ion-content>'/*ion-inline-end:"/Users/sympla/Projetos/fisio-app/app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAtendentePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_sala_sala_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_usuario_usuario_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__atendentes__ = __webpack_require__(55);
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
    function EditAtendentePage(navCtrl, salaService, usuarioService, _alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.salaService = salaService;
        this.usuarioService = usuarioService;
        this._alertCtrl = _alertCtrl;
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
        this.salaService
            .listarSalas()
            .then(function (user) {
            _this.sala = user.data;
            console.log(_this.sala);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    EditAtendentePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.usuarioService
            .buscarAtendente(this.id)
            .then(function (user) {
            _this.nome = user.data.userName;
            _this.nomeDesatualizado = user.data.userName;
            _this.email = user.data.userEmail;
            _this.emailDesatualizado = user.data.userEmail;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    EditAtendentePage.prototype.updateAtendente = function () {
        var _this = this;
        if (this.nome !== this.nomeDesatualizado || this.email !== this.emailDesatualizado) {
            this.usuarioService
                .editartUsuario(this.id, this.nome, this.email, this.salas)
                .then(function (user) {
                if (user.msg === "Dados atualizados com sucesso") {
                    _this._alertCtrl
                        .create({
                        title: "Atualizado com Sucesso.",
                        buttons: [
                            {
                                text: "Ok",
                                handler: function () {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__atendentes__["a" /* AtendentesPage */]);
                                }
                            }
                        ]
                    })
                        .present();
                }
                else {
                    _this._alertCtrl
                        .create({
                        title: "Erro inesperado, constatar o desenvolvedor",
                        buttons: [{ text: "Ok" }]
                    })
                        .present();
                }
            })
                .catch(function (error) {
                console.log(error);
            });
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
    EditAtendentePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-edit-atendente',template:/*ion-inline-start:"/Users/sympla/Projetos/fisio-app/app/src/pages/atendentes/edit-atendente/edit-atendente.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>EditAtendente</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-12 class="formulario">\n                <ion-input [(ngModel)]="nome" class="nome" type="text" placeholder="Nome">{{nome}}</ion-input>\n                <ion-input [(ngModel)]="email" class="email" type="email" placeholder="E-mail">{{email}}</ion-input>\n                <!-- <ion-input [(ngModel)]="senha" class="senha" type="password" placeholder="Senha"></ion-input> -->\n                <ion-select [(ngModel)]="salas" class="salas" placeholder="Selecione uma Sala" [selectOptions]="selectOptions" multiple="true">\n                    <div *ngFor="let salas of sala; let i = index">\n                        <ion-option value="{{sala[i].roomId}}">{{sala[i].roomName}}</ion-option>\n                    </div>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-12>\n                <button class="button_salvar" ion-button round (click)="updateAtendente()">Salvar</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/sympla/Projetos/fisio-app/app/src/pages/atendentes/edit-atendente/edit-atendente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__domain_sala_sala_service__["a" /* SalaService */],
            __WEBPACK_IMPORTED_MODULE_1__domain_usuario_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]])
    ], EditAtendentePage);
    return EditAtendentePage;
}());

//# sourceMappingURL=edit-atendente.js.map

/***/ }),

/***/ 163:
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
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAtendentePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_usuario_usuario_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__atendentes__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domain_sala_sala_service__ = __webpack_require__(34);
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
    function AddAtendentePage(navCtrl, usuarioService, salaService, navParams) {
        this.navCtrl = navCtrl;
        this.usuarioService = usuarioService;
        this.salaService = salaService;
        this.navParams = navParams;
        this.sala = [];
        this.dadosSala = [];
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
        this.salaService
            .listarSalas()
            .then(function (user) {
            _this.sala = user.data;
            console.log(_this.sala);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AddAtendentePage.prototype.adicionarAtendente = function () {
        var _this = this;
        for (var index = 0; index < this.salas.length; index++) {
            this.dadosSala.push(parseInt(this.salas[index]));
        }
        this.usuarioService
            .adicionandoUsuario(this.nome, this.email, this.senha, this.dadosSala)
            .then(function (user) {
            console.log(user);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__atendentes__["a" /* AtendentesPage */]);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AddAtendentePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-add-atendente',template:/*ion-inline-start:"/Users/sympla/Projetos/fisio-app/app/src/pages/atendentes/add-atendente/add-atendente.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>AddAtendente</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-12 class="formulario">\n                <ion-input [(ngModel)]="nome" class="nome" type="text" placeholder="Nome"></ion-input>\n                <ion-input [(ngModel)]="email" class="email" type="email" placeholder="E-mail"></ion-input>\n                <ion-input [(ngModel)]="senha" class="senha" type="password" placeholder="Senha"></ion-input>\n                <ion-select [(ngModel)]="salas" class="salas" placeholder="Selecione uma Sala" [selectOptions]="selectOptions" multiple="true">\n                    <div *ngFor="let salas of sala; let i = index">\n                        <ion-option value="{{sala[i].roomId}}">{{sala[i].roomName}}</ion-option>\n                    </div>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-12>\n                <button class="button_salvar" ion-button round (click)="adicionarAtendente()">Salvar</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/sympla/Projetos/fisio-app/app/src/pages/atendentes/add-atendente/add-atendente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__domain_usuario_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_4__domain_sala_sala_service__["a" /* SalaService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], AddAtendentePage);
    return AddAtendentePage;
}());

//# sourceMappingURL=add-atendente.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSalaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__salas__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_sala_sala_service__ = __webpack_require__(34);
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
    function AddSalaPage(navCtrl, salaService, navParams) {
        this.navCtrl = navCtrl;
        this.salaService = salaService;
        this.navParams = navParams;
    }
    AddSalaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddSalaPage');
    };
    AddSalaPage.prototype.addSala = function () {
        var _this = this;
        this.salaService
            .adicionandoSala(this.nome)
            .then(function (user) {
            console.log(user);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__salas__["a" /* SalasPage */]);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AddSalaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-sala',template:/*ion-inline-start:"/Users/sympla/Projetos/fisio-app/app/src/pages/salas/add-sala/add-sala.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>AddSala</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-12 class="formulario">\n                <ion-input [(ngModel)]="nome" class="nome" type="text" placeholder="Nome"></ion-input>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-12>\n                <button class="button_salvar" ion-button round (click)="addSala()">Salvar</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/sympla/Projetos/fisio-app/app/src/pages/salas/add-sala/add-sala.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__domain_sala_sala_service__["a" /* SalaService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddSalaPage);
    return AddSalaPage;
}());

//# sourceMappingURL=add-sala.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsqueciSenhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EsqueciSenhaPage = /** @class */ (function () {
    function EsqueciSenhaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EsqueciSenhaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EsqueciSenhaPage');
    };
    EsqueciSenhaPage.prototype.esqueciSenha = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
    };
    EsqueciSenhaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-esqueci-senha',template:/*ion-inline-start:"/Users/sympla/Projetos/fisio-app/app/src/pages/esqueci-senha/esqueci-senha.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Esqueci a Senha</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-12 class="esqueci_senha">\n                <ion-input class="email" placeholder="Digite seu E-mail"></ion-input>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-12 class="button">\n                <button class="button_esqueci_senha" ion-button round (click)="esqueciSenha()">Enviar</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/sympla/Projetos/fisio-app/app/src/pages/esqueci-senha/esqueci-senha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], EsqueciSenhaPage);
    return EsqueciSenhaPage;
}());

//# sourceMappingURL=esqueci-senha.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_server__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(53);
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
        var api = this._service.URL_API + "controller=user&action=login";
        var data = {
            "userEmail": email,
            "userPassword": password
        };
        var header = {
            "Content-Type": "application/json"
        };
        return this._http
            .post(api, data, header)
            .then(function (dado) {
            console.log('Teste Certo' + dado);
            var user = JSON.parse(dado.data);
            return user;
        })
            .catch(function (error) {
            var resposta = JSON.parse(error.error);
            return resposta;
        });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_2__providers_server_server__["a" /* ServerProvider */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login_service.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddEventoPage = /** @class */ (function () {
    function AddEventoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddEventoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddEventoPage');
    };
    AddEventoPage.prototype.sair = function () {
        this.navCtrl.pop();
    };
    AddEventoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-evento',template:/*ion-inline-start:"/Users/sympla/Projetos/fisio-app/app/src/pages/home/add-evento/add-evento.html"*/'<ion-header>\n    <ion-navbar>\n        <div class="adicionandoEvento">\n            <ion-title>Evento</ion-title>\n            <p class="button_sair">\n                <ion-icon name="close" (click)="sair()"></ion-icon>\n            </p>\n        </div>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/Users/sympla/Projetos/fisio-app/app/src/pages/home/add-evento/add-evento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddEventoPage);
    return AddEventoPage;
}());

//# sourceMappingURL=add-evento.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_atendentes_edit_atendente_edit_atendente__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_salas_add_sala_add_sala__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_atendentes_add_atendente_add_atendente__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_esqueci_senha_esqueci_senha__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_salas_salas__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_atendentes_atendentes__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_add_evento_add_evento__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic2_calendar__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_server_server__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_locales_pt_PT__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__domain_login_login_service__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__node_modules_angular_common_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__domain_usuario_usuario_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__domain_sala_sala_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























Object(__WEBPACK_IMPORTED_MODULE_17__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_18__angular_common_locales_pt_PT__["a" /* default */]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_atendentes_atendentes__["a" /* AtendentesPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_salas_salas__["a" /* SalasPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_esqueci_senha_esqueci_senha__["a" /* EsqueciSenhaPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_atendentes_add_atendente_add_atendente__["a" /* AddAtendentePage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_salas_add_sala_add_sala__["a" /* AddSalaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_add_evento_add_evento__["a" /* AddEventoPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_atendentes_edit_atendente_edit_atendente__["a" /* EditAtendentePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_21__node_modules_angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_atendentes_atendentes__["a" /* AtendentesPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_salas_salas__["a" /* SalasPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_esqueci_senha_esqueci_senha__["a" /* EsqueciSenhaPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_atendentes_add_atendente_add_atendente__["a" /* AddAtendentePage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_salas_add_sala_add_sala__["a" /* AddSalaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_add_evento_add_evento__["a" /* AddEventoPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_atendentes_edit_atendente_edit_atendente__["a" /* EditAtendentePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__domain_login_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_22__domain_usuario_usuario_service__["a" /* UsuarioService */],
                __WEBPACK_IMPORTED_MODULE_23__domain_sala_sala_service__["a" /* SalaService */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_10__angular_core__["G" /* LOCALE_ID */], useValue: undefined },
                { provide: __WEBPACK_IMPORTED_MODULE_10__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_server_server__["a" /* ServerProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSalaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__salas__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_sala_sala_service__ = __webpack_require__(34);
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
    function EditSalaPage(navCtrl, salaService, _alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.salaService = salaService;
        this._alertCtrl = _alertCtrl;
        this.navParams = navParams;
        this.id = this.navParams.data;
    }
    EditSalaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.salaService
            .buscarSala(this.id)
            .then(function (user) {
            _this.nome = user.data.roomName;
            _this.nomeDesatualizado = user.data.roomName;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    EditSalaPage.prototype.updateSala = function () {
        var _this = this;
        if (this.nome !== this.nomeDesatualizado) {
            this.salaService
                .editarSala(this.id, this.nome)
                .then(function (user) {
                if (user.msg === "Dados atualizados com sucesso") {
                    _this._alertCtrl
                        .create({
                        title: "Atualizado com Sucesso.",
                        buttons: [
                            {
                                text: "Ok",
                                handler: function () {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__salas__["a" /* SalasPage */]);
                                }
                            }
                        ]
                    })
                        .present();
                }
                else {
                    _this._alertCtrl
                        .create({
                        title: "Erro inesperado, constatar o desenvolvedor",
                        buttons: [{ text: "Ok" }]
                    })
                        .present();
                }
            })
                .catch(function (error) {
                console.log(error);
            });
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
            selector: 'page-edit-sala',template:/*ion-inline-start:"/Users/sympla/Projetos/fisio-app/app/src/pages/salas/edit-sala/edit-sala.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>EditSala</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-12 class="formulario">\n                <ion-input [(ngModel)]="nome" class="nome" type="text" placeholder="Nome">{{nome}}</ion-input>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-12>\n                <button class="button_salvar" ion-button round (click)="updateSala()">Salvar</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/sympla/Projetos/fisio-app/app/src/pages/salas/edit-sala/edit-sala.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__domain_sala_sala_service__["a" /* SalaService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], EditSalaPage);
    return EditSalaPage;
}());

//# sourceMappingURL=edit-sala.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_salas_salas__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_atendentes_atendentes__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(212);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Agenda', component: __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */] },
            { title: 'Atendentes', component: __WEBPACK_IMPORTED_MODULE_2__pages_atendentes_atendentes__["a" /* AtendentesPage */] },
            { title: 'Salas', component: __WEBPACK_IMPORTED_MODULE_1__pages_salas_salas__["a" /* SalasPage */] },
            { title: 'Sair', component: __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */] }
        ];
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
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/sympla/Projetos/fisio-app/app/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/sympla/Projetos/fisio-app/app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 294:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_server__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(53);
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
    function SalaService(events, _http, _service) {
        this.events = events;
        this._http = _http;
        this._service = _service;
    }
    SalaService.prototype.listarSalas = function () {
        var api = this._service.URL_API + "controller=room&action=list";
        var data = {};
        var header = {
            "Content-Type": "application/json"
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
            "Content-Type": "application/json"
        };
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
            "Content-Type": "application/json"
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
            "Content-Type": "application/json"
        };
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
            "Content-Type": "application/json"
        };
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_2__providers_server_server__["a" /* ServerProvider */]])
    ], SalaService);
    return SalaService;
}());

//# sourceMappingURL=sala_service.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(203);
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

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_server__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(53);
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
    function UsuarioService(events, _http, _service) {
        this.events = events;
        this._http = _http;
        this._service = _service;
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
            "Content-Type": "application/json"
        };
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
            "Content-Type": "application/json"
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
            "Content-Type": "application/json"
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
            "Content-Type": "application/json"
        };
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
    UsuarioService.prototype.excluirUsuario = function (id) {
        var api = this._service.URL_API + "controller=user&action=delete&key=" + ("" + id);
        var data = {};
        var header = {
            "Content-Type": "application/json"
        };
        return this._http
            .delete(api, data, header)
            .then(function (dado) {
            var exluirUsuario = JSON.parse(dado.data);
            return exluirUsuario;
        })
            .catch(function (error) {
            var resposta = JSON.parse(error.error);
            return resposta;
        });
    };
    UsuarioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_2__providers_server_server__["a" /* ServerProvider */]])
    ], UsuarioService);
    return UsuarioService;
}());

//# sourceMappingURL=usuario_service.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtendentesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_atendente_edit_atendente__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_usuario_usuario_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_atendente_add_atendente__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AtendentesPage = /** @class */ (function () {
    function AtendentesPage(navCtrl, usuarioService, navParams) {
        this.navCtrl = navCtrl;
        this.usuarioService = usuarioService;
        this.navParams = navParams;
        this.usuario = [];
    }
    AtendentesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.usuarioService
            .listarUsuarios()
            .then(function (user) {
            _this.usuario = user.data;
            console.log(_this.usuario);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AtendentesPage.prototype.addAtendente = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_atendente_add_atendente__["a" /* AddAtendentePage */]);
    };
    AtendentesPage.prototype.editar = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__edit_atendente_edit_atendente__["a" /* EditAtendentePage */], id);
    };
    AtendentesPage.prototype.excluir = function (id) {
        var _this = this;
        this.usuarioService
            .excluirUsuario(id)
            .then(function (user) {
            console.log(user);
            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AtendentesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-atendentes',template:/*ion-inline-start:"/Users/sympla/Projetos/fisio-app/app/src/pages/atendentes/atendentes.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <div class="adicionandoAtendente">\n            <ion-title>Atendentes</ion-title>\n            <p class="button_add">\n                <ion-icon name="add" (click)="addAtendente()"></ion-icon>\n            </p>\n        </div>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div *ngFor="let usuarios of usuario; let i = index">\n        <ion-list>\n            <ion-item-sliding #item>\n                <ion-item>\n                    <div *ngIf="usuario[i].userAdmin !== true">\n                        <div>{{usuario[i].userName}}</div>\n                    </div>\n                </ion-item>\n                <ion-item-options side="left">\n                    <button ion-button color="danger" (click)="excluir(usuario[i].userId)"><ion-icon name="trash"></ion-icon>\n                    </button>\n                </ion-item-options>\n                <ion-item-options side="right">\n                    <button ion-button color="secondary" (click)="editar(usuario[i].userId)"><ion-icon name="settings"></ion-icon>\n                    </button>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/sympla/Projetos/fisio-app/app/src/pages/atendentes/atendentes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__domain_usuario_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */]])
    ], AtendentesPage);
    return AtendentesPage;
}());

//# sourceMappingURL=atendentes.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_sala_edit_sala__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_sala_sala_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_sala_add_sala__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SalasPage = /** @class */ (function () {
    function SalasPage(navCtrl, salaService, navParams) {
        this.navCtrl = navCtrl;
        this.salaService = salaService;
        this.navParams = navParams;
        this.sala = [];
    }
    SalasPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.salaService
            .listarSalas()
            .then(function (user) {
            _this.sala = user.data;
            console.log(_this.sala);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    SalasPage.prototype.addSala = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_sala_add_sala__["a" /* AddSalaPage */]);
    };
    SalasPage.prototype.editar = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__edit_sala_edit_sala__["a" /* EditSalaPage */], id);
    };
    SalasPage.prototype.excluir = function (id) {
        var _this = this;
        this.salaService
            .excluirSala(id)
            .then(function (user) {
            console.log(user);
            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    SalasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-salas',template:/*ion-inline-start:"/Users/sympla/Projetos/fisio-app/app/src/pages/salas/salas.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <div class="adicionandosala">\n            <ion-title>Salas</ion-title>\n            <p class="button_add">\n                <ion-icon name="add" (click)="addSala()"></ion-icon>\n            </p>\n        </div>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div *ngFor="let salas of sala; let i = index">\n        <ion-list>\n            <ion-item-sliding #item>\n                <ion-item>\n                    <div>{{sala[i].roomName}}</div>\n                </ion-item>\n                <ion-item-options side="left">\n                    <button ion-button color="danger" (click)="excluir(sala[i].roomId)"><ion-icon name="trash"></ion-icon>\n                    </button>\n                </ion-item-options>\n                <ion-item-options side="right">\n                    <button ion-button color="secondary" (click)="editar(sala[i].roomId)"><ion-icon name="settings"></ion-icon>\n                    </button>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/sympla/Projetos/fisio-app/app/src/pages/salas/salas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__domain_sala_sala_service__["a" /* SalaService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */]])
    ], SalasPage);
    return SalasPage;
}());

//# sourceMappingURL=salas.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map
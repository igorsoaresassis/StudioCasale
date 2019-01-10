import { EditAtendentePage } from './../pages/atendentes/edit-atendente/edit-atendente';
import { AddSalaPage } from './../pages/salas/add-sala/add-sala';
import { AddAtendentePage } from './../pages/atendentes/add-atendente/add-atendente';
import { EsqueciSenhaPage } from './../pages/esqueci-senha/esqueci-senha';
import { SalasPage } from './../pages/salas/salas';
import { AtendentesPage } from './../pages/atendentes/atendentes';
import { LoginPage } from './../pages/login/login';
import { HomePage } from '../pages/home/home';
import { AddEventoPage } from '../pages/home/add-evento/add-evento';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NgCalendarModule  } from 'ionic2-calendar';


import { ServerProvider } from '../providers/server/server';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt-PT';
import { LoginService } from '../domain/login/login_service';
import { HTTP } from '@ionic-native/http';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { UsuarioService } from '../domain/usuario/usuario_service';
import { SalaService } from '../domain/sala/sala_service';
registerLocaleData(ptBr)

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AtendentesPage,
    SalasPage,
    EsqueciSenhaPage,
    AddAtendentePage,
    AddSalaPage,
    AddEventoPage,
    EditAtendentePage
  ],
  imports: [
    BrowserModule,
    NgCalendarModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AtendentesPage,
    SalasPage,
    EsqueciSenhaPage,
    AddAtendentePage,
    AddSalaPage,
    AddEventoPage,
    EditAtendentePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginService,
    UsuarioService,
    SalaService,
    HTTP,
    {provide: LOCALE_ID, useValue: undefined },
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServerProvider
  ]
})
export class AppModule {}

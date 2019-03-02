import {EditEventoPage} from './../pages/calendario/edit-evento/edit-evento';
import {HTTP,} from '@ionic-native/http';
import {HttpClientModule} from '@angular/common/http';
import {UsuarioService} from './../domain/usuario/usuario_service';
import {LoginService} from './../domain/login/login_service';
import {AddEventoPage} from './../pages/calendario/add-evento/add-evento';
import {LoginPage} from './../pages/login/login';
import {SalaPage} from './../pages/sala/sala';
import {NgModule, ErrorHandler, LOCALE_ID} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {CalendarioPage} from '../pages/calendario/calendario';
import {AtendentePage} from '../pages/atendente/atendente';
import {PerfilPage} from '../pages/perfil/perfil';
import {EditSalaPage} from '../pages/sala/edit-sala/edit-sala';
import {EditAtendentePage} from '../pages/atendente/edit-atendente/edit-atendente';
import {SalaService} from '../domain/sala/sala_service';
import {ServerProvider} from '../providers/server/server';
import {NgCalendarModule} from 'ionic2-calendar';

import localePtBr from '@angular/common/locales/pt-PT';
import {registerLocaleData} from '@angular/common';
import {CalendarioService} from '../domain/calendario/calendario_service';

registerLocaleData(localePtBr);


@NgModule({
    declarations: [
        MyApp,
        CalendarioPage,
        AtendentePage,
        SalaPage,
        PerfilPage,
        HomePage,
        TabsPage,
        EditSalaPage,
        LoginPage,
        EditAtendentePage,
        AddEventoPage,
        EditEventoPage,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgCalendarModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        CalendarioPage,
        AtendentePage,
        SalaPage,
        PerfilPage,
        HomePage,
        TabsPage,
        EditSalaPage,
        LoginPage,
        EditAtendentePage,
        AddEventoPage,
        EditEventoPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        LoginService,
        SalaService,
        CalendarioService,
        HTTP,
        UsuarioService,
        {provide: LOCALE_ID, useValue: 'pt-PT'},
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ServerProvider
    ]
})
export class AppModule {
}

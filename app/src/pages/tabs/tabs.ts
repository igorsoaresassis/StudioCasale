import {PerfilPage} from './../perfil/perfil';
import {AtendentePage} from './../atendente/atendente';
import {Component, OnInit} from '@angular/core';

import {HomePage} from '../home/home';
import {CalendarioPage} from '../calendario/calendario';
import {SalaPage} from '../sala/sala';
import {Events} from 'ionic-angular';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage implements OnInit {

    tab1Root;
    tab2Root;
    tab3Root;
    tab4Root;
    tab5Root;
    userAdmin;

    constructor(public events: Events) {
        this.events.subscribe('user', (user) => {
            if (user) {
                this.tab1Root = HomePage;
                this.tab2Root = CalendarioPage;
                this.tab3Root = AtendentePage;
                this.tab4Root = SalaPage;
                this.tab5Root = PerfilPage;
            } else {
                this.tab1Root = HomePage;
                this.tab2Root = CalendarioPage;
                this.tab5Root = PerfilPage;
            }
        });
    }

    ngOnInit() {
        this.userAdmin = localStorage.getItem('userAdmin') === "true";

        this.tab1Root = HomePage;
        this.tab2Root = CalendarioPage;
        this.tab5Root = PerfilPage;

        if (this.userAdmin) {
            this.tab3Root = AtendentePage;
            this.tab4Root = SalaPage;
        }
    }
}

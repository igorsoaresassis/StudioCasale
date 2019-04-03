import { Component } from "@angular/core";
import {NavController, NavParams, LoadingController, AlertController, Events} from "ionic-angular";

import { SalaService } from "./../../../domain/sala/sala_service";
import { UsuarioService } from "./../../../domain/usuario/usuario_service";
import { CalendarioService } from "../../../domain/calendario/calendario_service";

import * as moment from "moment";
import {getLoggedUser, showAlert, showErrorAlert} from "../../../app/util";

@Component({
    selector: "page-edit-evento",
    templateUrl: "edit-evento.html"
})
export class EditEventoPage {
    public pageTitle = "Inserir Evento";
    public roomSelectOptions;
    public userSelectOptions;
    public roomList = [];
    public userList = [];
    public replay = false;
    public qtd;
    public cont = 0;

    public event = {
        eventId: null,
        title: null,
        startTime: null,
        endTime: null,
        roomId: null,
        userId: null
    };

    public loggedUser = getLoggedUser();

    constructor(
        public navCtrl: NavController,
        public calendarioService: CalendarioService,
        public salaService: SalaService,
        public usuarioService: UsuarioService,
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController,
        public navParams: NavParams,
        public events: Events,
    ) {
        if (this.navParams.data.eventId) {
            const data = this.navParams.data;

            this.event.eventId = data.eventId;
            this.event.title = data.title;
            this.event.startTime = moment(data.startTime).format();
            this.event.endTime = moment(data.endTime).format();
            this.event.roomId = data.roomId;
            this.event.userId = data.userId;
        } else {
            const startMoment = moment().minutes(0).seconds(0);
            const endMoment = startMoment.clone().add(1, 'h');

            this.event.eventId = null;
            this.event.title = null;
            this.event.startTime = startMoment.format();
            this.event.endTime = endMoment.format();
            this.event.roomId = null;
            this.event.userId = this.loggedUser.userId;
        }

        if (this.event.eventId) {
            this.pageTitle = "Editar Evento";
        }

        this.roomSelectOptions = {
            title: "Selecione a Sala",
            mode: "md"
        };

        this.userSelectOptions = {
            title: "Selecione o Atendente",
            mode: "md"
        };
    }

    ionViewWillEnter() {
        this.loadSelectData();
    }

    loadSelectData() {
        let loader = this.loadingCtrl.create({ content: 'Carregando...' });
        loader.present();

        document.querySelector(".tabbar").setAttribute("style", "z-index:-1");

        this.salaService
            .list()
            .then(response => {
                this.roomList = response.data;

                if (this.loggedUser.userAdmin) {
                    this.loadUsers(loader);
                } else {
                    loader.dismiss();
                }
            })
            .catch(() => {
                loader.dismiss();
                showErrorAlert(this.alertCtrl, 'Falha ao carregar salas.');
            })
    }

    loadUsers(loader) {
        this.usuarioService
            .list()
            .then(response => {
                this.userList = response.data;
                loader.dismiss();
            })
            .catch(() => {
                loader.dismiss();
                showErrorAlert(this.alertCtrl, 'Falha ao carregar atendentes.');
            })
    }

    saveEvent() {
        let loader = this.loadingCtrl.create({content: 'Processando...'});
        loader.present();

        let momentStartDate = moment(this.event.startTime);
        let momentEndDate = moment(this.event.endTime);

        let eventId = this.event.eventId;
        let description = this.event.title;
        let startDate = momentStartDate.format('YYYY-MM-DD HH:mm');
        let endDate = momentEndDate.format('YYYY-MM-DD HH:mm');
        let roomId = this.event.roomId;
        let userId = this.event.userId;

        if (momentStartDate.isSameOrAfter(momentEndDate)) {
            loader.dismiss();
            showErrorAlert(this.alertCtrl, 'A data inicial deve ser anterior à data final.');
            return;
        }

        if (!description || !startDate || !endDate || !roomId) {
            loader.dismiss();
            showErrorAlert(this.alertCtrl, 'Por favor preencha todos os campos.');
            return;
        }

        if (this.event.eventId) {
            this.calendarioService
                .update(eventId, description, startDate, endDate, roomId, userId)
                .then(response => {
                    if (response.hasError) {
                        loader.dismiss();
                        showErrorAlert(this.alertCtrl, response.msg);
                        return;
                    }

                    loader.dismiss();
                    this.events.publish('calendar:load-events', true);
                    showAlert(this.alertCtrl, response.msg);
                }).catch(() => {
                    loader.dismiss();
                    showErrorAlert(this.alertCtrl, 'Falha ao atualizar evento.');
                });
        } else {
          if(!this.qtd) {
            this.calendarioService
                .insert(description, startDate, endDate, roomId, userId)
                .then(response => {
                    if (response.hasError) {
                        loader.dismiss();
                        showErrorAlert(this.alertCtrl, response.msg);
                        return;
                    }

                    this.event.eventId = response.data.eventId;

                    loader.dismiss();
                    this.events.publish('calendar:load-events', true);
                    showAlert(this.alertCtrl, response.msg)
                }).catch(() => {
                    loader.dismiss();
                    showErrorAlert(this.alertCtrl, 'Falha ao inserir evento.');
                });
          } else {
            for (let i = 0; i <= this.qtd; i++) {

              let dataInicio = new Date(startDate);
              dataInicio.setDate(dataInicio.getDate() + (7 * i));

              let dInicio = String(dataInicio.getDate());
              let mInicio = String(dataInicio.getMonth() + 1);
              let diaInicio = dInicio.padStart(2, '0');
              let mesInicio = mInicio.padStart(2, '0');
              let anoInicio = dataInicio.getFullYear();
              let horaInicio = dataInicio.getHours();
              let mmInicio = String(dataInicio.getMinutes());
              let minutoInicio = mmInicio.padStart(2, '0');

              let dataInicioCompleta = String(anoInicio + '-' + mesInicio + '-' + diaInicio + ' ' + horaInicio + ':' + minutoInicio);

              const dataFinal = new Date(endDate);
              dataFinal.setDate(dataFinal.getDate() + (7 * i));

              let dFim = String(dataFinal.getDate());
              let mFim = String(dataFinal.getMonth() + 1);
              let diaFim = dFim.padStart(2, '0');
              let mesFim = mFim.padStart(2, '0');
              let anoFim = dataFinal.getFullYear();
              let horaFim = dataFinal.getHours();
              let mmFim = String(dataFinal.getMinutes());
              let minutoFim = mmFim.padStart(2, '0');

              let dataFimCompleta = String(anoFim + '-' + mesFim + '-' + diaFim + ' ' + horaFim + ':' + minutoFim);

              this.calendarioService
                  .insert(description, dataInicioCompleta, dataFimCompleta, roomId, userId)
                  .then(response => {
                      if (response.hasError) {
                          loader.dismiss();
                          showErrorAlert(this.alertCtrl, response.msg);
                          return;
                      }
                      if(response.msg === "Evento inserido com sucesso") {
                        this.event.eventId = response.data.eventId;
                        this.cont++;
                      }
                      let valor = parseInt(this.qtd) + 1;

                      if(this.cont === valor) {
                        loader.dismiss();
                        this.events.publish('calendar:load-events', true);
                        showAlert(this.alertCtrl, response.msg)
                      }
                      this.events.publish('calendar:load-events', true);
                  }).catch(() => {
                      loader.dismiss();
                      showErrorAlert(this.alertCtrl, 'Falha ao inserir evento.');
                  });
              }
          }
        }
    }

    removeEventDialog() {
        const buttons = [
            {
                text: 'Não',
                role: 'Não'
            },
            {
                text: 'Sim',
                role: 'Sim',
                handler: () => { this.removeEvent() }
            }
        ];
        let alert = this.alertCtrl.create({ title: 'Exclusão de Evento', buttons: buttons });
        alert.setMessage('Tem certeza que deseja excluir o evento?');
        alert.present();
    }

    onStartTimeChange() {
        const startMoment = moment(this.event.startTime);
        this.event.endTime = startMoment.add(1, 'h').format()
    }

    removeEvent() {
      let loader = this.loadingCtrl.create({ content: 'Processando...' });
        loader.present();

        this.calendarioService
            .remove(this.event.eventId)
            .then((response) => {
                if (response.hasError) {
                    loader.dismiss();
                    showErrorAlert(this.alertCtrl, response.msg);
                    return;
                }

                const buttons = [
                    {
                        text: 'Ok',
                        handler: () => { this.navCtrl.pop(this.navCtrl.getActive().component) }
                    }
                ];

                let alert = this.alertCtrl.create({ title: 'Sucesso', buttons: buttons });
                alert.setMessage(response.msg);

                loader.dismiss();
                this.events.publish('calendar:load-events', true);
                alert.present();
            })
            .catch(() => {
                loader.dismiss();
                showErrorAlert(this.alertCtrl, 'Falha ao remover evento.');
            })

    }
    repetir() {
      if(this.replay === false){
        this.replay = true;
      } else {
        this.replay = false;
      }
    }
}

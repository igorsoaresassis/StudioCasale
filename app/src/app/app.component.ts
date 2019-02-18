import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = '';
  public token;
  public status;
  public statusMenu;
  showSplash = true;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public events: Events, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.overlaysWebView(false);
      statusBar.backgroundColorByHexString('#ccc');
      this.token = localStorage.getItem('token');

      if(this.token) {
        this.rootPage = TabsPage
      } else{
        this.rootPage = LoginPage
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

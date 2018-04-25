import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {AbrirChamadosPage} from '../pages/abrir-chamados/abrir-chamados';
import {FecharChamadoPage} from '../pages/fechar-chamado/fechar-chamado';
import {ConsultarChamadosPage} from '../pages/consultar-chamados/consultar-chamados';
import {DestinoPage} from '../pages/destino/destino';
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    AbrirChamadosPage,
    FecharChamadoPage,
    ConsultarChamadosPage,
    DestinoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AbrirChamadosPage,
    FecharChamadoPage,
    ConsultarChamadosPage,
    DestinoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

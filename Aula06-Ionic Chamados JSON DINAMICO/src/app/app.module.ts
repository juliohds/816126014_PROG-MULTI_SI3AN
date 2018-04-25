import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { cadastrarPage } from '../pages/cadastrar/cadastrar';
import { listaPage } from '../pages/lista/lista';
import { encerrarPage } from '../pages/encerrar/encerrar';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpModule} from "@angular/http";
import { FilasProvider } from '../providers/filas/filas';
import { ChamadosProvider } from '../providers/chamados/chamados';

@NgModule({
  declarations: [
    MyApp,
    cadastrarPage,
    listaPage,
    encerrarPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    listaPage,          
    cadastrarPage,
    encerrarPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FilasProvider,
    ChamadosProvider
  ]
})
export class AppModule {}

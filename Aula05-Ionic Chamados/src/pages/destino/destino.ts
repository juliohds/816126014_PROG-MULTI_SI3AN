import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AbrirChamadosPage } from '../abrir-chamados/abrir-chamados';

/**
 * Generated class for the DestinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-destino',
  templateUrl: 'destino.html',
})
export class DestinoPage {
  public  abrirchamado : AbrirChamadosPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.abrirchamado = this.navParams.get("ChamadoSelecionado");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DestinoPage');
  }

  

  

}

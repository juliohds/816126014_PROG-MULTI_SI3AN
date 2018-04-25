import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DestinoPage} from '../../pages/destino/destino';
import {chamado} from '../../model/chamado';

/**
 * Generated class for the AbrirChamadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abrir-chamados',
  templateUrl: 'abrir-chamados.html',
})



export class AbrirChamadosPage {
  public titulo:string = "Abrir Chamados";
  public chamados:chamado [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbrirChamadosPage');
    this.chamados = [ {nome:'Novo Projeto'},
                      {nome: 'Manutenção do Sistema de Vendas'},
                      {nome: 'Manutenção do Sistema ERP'},
                      {nome: 'Servidores'},
                      {nome: 'Redes'},
                      {nome: 'Telefonia'},
                      {nome: 'Desktop'},
    ];

  }

  irParaDestino(abrirchamados:AbrirChamadosPage):void{
    this.navCtrl.push(DestinoPage, {ChamadoSelecionado: AbrirChamadosPage});
    }

}

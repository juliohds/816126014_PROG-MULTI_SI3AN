import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DestinoPage } from '../../pages/destino/destino';
import { chamado } from '../../model/chamado';

/**
 * Generated class for the ConsultarChamadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultar-chamados',
  templateUrl: 'consultar-chamados.html',
})
export class ConsultarChamadosPage {
  public titulo: string = "Consultar Chamados";
  public chamados: chamado[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultarChamadosPage');
    this.chamados = [{ nome: 'Novo Projeto' },
    { nome: 'Manutenção do Sistema de Vendas' },
    { nome: 'Manutenção do Sistema ERP' },
    { nome: 'Servidores' },
    { nome: 'Redes' },
    { nome: 'Telefonia' },
    { nome: 'Desktop' },
    ];
  }

  irParaDestino(consultarchamados:ConsultarChamadosPage):void{
    this.navCtrl.push(DestinoPage, {ChamadoSelecionado: ConsultarChamadosPage});
    }

}

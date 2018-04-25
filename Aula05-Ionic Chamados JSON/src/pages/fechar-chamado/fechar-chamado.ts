import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DestinoPage } from '../../pages/destino/destino';
import { chamado } from '../../model/chamado';

/**
 * Generated class for the FecharChamadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fechar-chamado',
  templateUrl: 'fechar-chamado.html',
})
export class FecharChamadoPage {
  public titulo: string = "Fechar Chamados";
  public chamados: chamado[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FecharChamadoPage');
    this.chamados = [{ nome: 'Novo Projeto' },
    { nome: 'Manutenção do Sistema de Vendas' },
    { nome: 'Manutenção do Sistema ERP' },
    { nome: 'Servidores' },
    { nome: 'Redes' },
    { nome: 'Telefonia' },
    { nome: 'Desktop' },
    ];
  }

  irParaDestino(fecharchamados:FecharChamadoPage):void{
    this.navCtrl.push(DestinoPage, {ChamadoSelecionado: FecharChamadoPage});
    }

}

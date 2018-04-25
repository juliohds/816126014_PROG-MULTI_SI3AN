import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chamado } from '../../Entity/Chamado';

@Component({
  selector: 'page-encerrar',
  templateUrl: 'encerrar.html'
})
export class encerrarPage {
  items:Chamado[] = [
    new Chamado('Troca de HD','25/03/2018','','Aberto'),
    new Chamado('Reset de senha','25/03/2018','22/01/2018','Fechado'),
    new Chamado('Instalação de programa','25/03/2018','','Aberto'),
    new Chamado('Solicitação de acesso','25/03/2018','15/01/2017','Fechado'),
    new Chamado('Criação de regra de firewall','25/03/2018','','Aberto')
  ];
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
  constructor(public navCtrl: NavController) {

  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdicionaClientePage } from '../adiciona-cliente/adiciona-cliente';
import { ExibeClientesPage } from '../exibe-clientes/exibe-clientes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public cadastrarCliente(){
    this.navCtrl.push(AdicionaClientePage)
  }

  public exibirClientes (){
    this.navCtrl.push(ExibeClientesPage);
  }

}

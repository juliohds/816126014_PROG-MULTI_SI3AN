import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteProvider } from '../../providers/cliente/cliente'; 
import { AtualizaClientePage } from '../atualiza-cliente/atualiza-cliente';
import { Cliente } from '../../modelo/cliente';
import {	ToastController }	from 'ionic-angular';
/**
 * Generated class for the ExibeClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exibe-clientes',
  templateUrl: 'exibe-clientes.html',
})
export class ExibeClientesPage {
  public clientes:	Cliente[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public clienteProvider:	ClienteProvider, private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    this.clienteProvider.listar().
    then((clientes:	Cliente [])	=>{
    this.clientes =	clientes;
    });
  }

  exibirToast (dados){
    let t =	this.toastCtrl.create ({
    message: dados,
    duration: 3000,
    position: "top"
    });
    t.present();
  }
  
  atualizaCliente (cliente:	Cliente){
    this.navCtrl.push(AtualizaClientePage,	cliente);
  }

  apagaCliente (cliente:	Cliente){
    this.clienteProvider.apagar (cliente);
    this.exibirToast ("Cliente	apagado	com	sucesso");
    //para	atualizar	alista	que	está	sendo	exibida
    this.clienteProvider.listar().
    then((clientes:	Cliente [])	=>{
    this.clientes =	clientes;
    });
    }

}


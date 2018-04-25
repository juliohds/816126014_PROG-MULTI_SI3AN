import { Component } from '@angular/core';
import { NavController, DateTime } from 'ionic-angular';
import { Chamado } from '../../Entity/Chamado';
import { ChamadosProvider } from '../../providers/chamados/chamados';
import { FilasProvider } from '../../providers/filas/filas';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
  providers: [
    FilasProvider,
    ChamadosProvider
  ]
})
export class listaPage {
  public lista_filas = new Array<any>();
  public lista_chamados = new Array<any>();
  public selectedId;
  public myIndex: number = 0;
  
  onSelectChange(item: any) {
    this.getChamadosFila(this.selectedId);
    console.log("Selected Item", this.selectedId);
  }
  constructor(public navCtrl: NavController,
    private filaProvider: FilasProvider, 
    private chamadProvider: ChamadosProvider) {

  }

  getChamadosFila(id){
    this.chamadProvider.getChamados(id).subscribe(
      data => {
      const response = (data as any);
      const objeto_retorno = JSON.parse(response._body);
      this.lista_chamados = objeto_retorno;
      console.log(this.lista_chamados);
      console.log(objeto_retorno);    
    }, error => {
      console.log(error);
    }
  )
  }
  ionViewDidLoad(){
    this.filaProvider.getFilas().subscribe(
      data => {
      const response = (data as any);
      const objeto_retorno = JSON.parse(response._body);
      this.lista_filas = objeto_retorno;
      console.log(this.lista_filas);
      console.log(objeto_retorno);
     
    }, error => {
      console.log(error);
    }
  )
  }
}

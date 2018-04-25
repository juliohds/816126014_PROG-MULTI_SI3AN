import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FilasProvider } from '../../providers/filas/filas';
import { Chamado } from '../../Entity/Chamado';
import { ChamadosProvider } from '../../providers/chamados/chamados';
import { Fila } from '../../Entity/Fila';

@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html'
})
export class cadastrarPage {
  public lista_filas = new Array<any>();  
  public selectedId;
  public myIndex: number = 0;
  public chamado: Chamado;
  public descricao;

  onSelectChange(item: any) {
    console.log("Selected Item", this.selectedId);
  }
  constructor(public navCtrl: NavController,
    private filaProvider: FilasProvider,
  private chamadoProvider: ChamadosProvider,
  private alertCtrl: AlertController) {


  }

  cadastrarClick(event){
   this.chamado = new Chamado(this.descricao, new Date().toISOString(),null,"Aberto", new Fila(this.selectedId));
   var chamadoJson = JSON.stringify(this.chamado);
    this.chamadoProvider.postChamados(chamadoJson).subscribe(
      data => {
      const response = (data as any);
      const objeto_retorno = JSON.parse(response._body);
      console.log(objeto_retorno);
     
        let alert = this.alertCtrl.create({
          title: 'Sucesso',
          subTitle: 'Chamado aberto com sucesso',
          buttons: ['OK']
        });
        this.descricao = "";
        alert.present();
    }, error => {
      let alert = this.alertCtrl.create({
        title: 'Erro',
        subTitle: 'Houve um erro ao abrir o chamado',
        buttons: ['OK']
      });
      alert.present();
      console.log(error);
    }
  );
    console.log(chamadoJson);

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

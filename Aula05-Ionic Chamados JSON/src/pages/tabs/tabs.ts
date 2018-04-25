import { Component } from '@angular/core';

import {AbrirChamadosPage} from '../abrir-chamados/abrir-chamados';
import {FecharChamadoPage} from '../fechar-chamado/fechar-chamado';
import {ConsultarChamadosPage} from '../consultar-chamados/consultar-chamados';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

 
  tab1Root = AbrirChamadosPage;
  tab2Root = FecharChamadoPage;
  tab3Root = ConsultarChamadosPage;

  constructor() {

  }
}

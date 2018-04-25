import { Component } from '@angular/core';

import { cadastrarPage } from '../cadastrar/cadastrar';
import { listaPage } from '../lista/lista';
import { encerrarPage } from '../encerrar/encerrar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = encerrarPage;
  tab2Root = cadastrarPage;
  tab3Root = listaPage;

  constructor() {

  }
}

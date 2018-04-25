import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultarChamadosPage } from './consultar-chamados';

@NgModule({
  declarations: [
    ConsultarChamadosPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultarChamadosPage),
  ],
})
export class ConsultarChamadosPageModule {}

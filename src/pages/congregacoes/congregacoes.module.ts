import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CongregacoesPage } from './congregacoes';

@NgModule({
  declarations: [
    CongregacoesPage,
  ],
  imports: [
    IonicPageModule.forChild(CongregacoesPage),
  ],
})
export class CongregacoesPageModule {}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CongregacaoDTO } from '../../models/congregacao.dto';
import { CongregacaoService } from '../../services/domain/congregacao.service';

/**
 * Generated class for the CongregacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-congregacoes',
  templateUrl: 'congregacoes.html',
})
export class CongregacoesPage {

  items: CongregacaoDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public congregacaoService: CongregacaoService ) {
  }

  ionViewDidLoad() {
    this.congregacaoService.findAll()
      .subscribe(response => {
       this.items = response; 
      },
      error => {
        console.log(error);
      });
  }

}

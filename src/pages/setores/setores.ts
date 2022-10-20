import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetorDTO } from '../../models/setor.dto';
import { SetorService } from '../../services/domain/setor.service';

/**
 * Generated class for the SetoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setores',
  templateUrl: 'setores.html',
})
export class SetoresPage {

  items: SetorDTO[];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public setorService: SetorService) {
  }

  ionViewDidLoad() {
    this.setorService.findAll()
      .subscribe(response => {
        this.items = response;
    },
    error => {
      console.log(error);
  });
}

}

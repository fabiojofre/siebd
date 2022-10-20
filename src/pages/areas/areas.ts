import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AreaDTO } from '../../models/area.dto';
import { AreaService } from '../../services/domain/area.service';

/**
 * Generated class for the AreasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-areas',
  templateUrl: 'areas.html',
})
export class AreasPage {

  items: AreaDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public areaService: AreaService) {
  }

  ionViewDidLoad() {
    this.areaService.findAll()
      .subscribe(response => {
        this.items = response;
    });
  }

}

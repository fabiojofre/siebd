import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  login(){
    //empilhar uma pagina na outra ===> Obs: pra coiar outra página tem que usar o comando: ionic generate page NomeDaPagina 
    //this.navCtrl.push("ChamadasPage"); 

    //sem empilhar
    this.navCtrl.setRoot('ServicoPage');
  }

  registro(){
    this.navCtrl.push("RegistroPage");
  }
  recuperaSenha(){
    this.navCtrl.push('RecuperaSenhaPage');
  }

}

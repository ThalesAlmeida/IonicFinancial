import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalContasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-contas',
  templateUrl: 'modal-contas.html',
})
export class ModalContasPage {
  view: any;
  conta: any; 

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.view = viewCtrl;
    this.conta = navParams.get("parametro") || {descricao: ""};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalContasPage');
  }

  public cancel(){
    this.view.dismiss();
  }

  public salvar(){
    this.view.dismiss(this.conta);
  }

}

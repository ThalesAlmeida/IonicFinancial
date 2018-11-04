import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {SQLite} from 'ionic-native';

/*
  Generated class for the ContasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContasProvider {
  list:any = [];


  constructor() {
    
  }

  getList(){
    this.list = [
        {descricao: "Alimentação"},
        {descricao: "Lazer"},
        {descricao: "Serviços"},
    ]

    return this.list;
  }
  
  insert(conta, successCallBack){

  }

  edit(conta){

  }

  delete(conta){

  }

}

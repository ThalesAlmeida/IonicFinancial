import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ContasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContasProvider {
  list:any = [];


  constructor(public http: HttpClient) {
    
  }

  getList(){
    this.list = [
        {descricao: "Alimentação"},
        {descricao: "Lazer"},
        {descricao: "Serviços"},
    ]

    return this.list;
  }
  
  insert(conta){

  }

  edit(conta){

  }

  delete(conta){

  }

}

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FilasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FilasProvider {
  private baseURL = 'http://localhost:8080/arqsw_sdesk/';
  
  constructor(public http: Http) {
    console.log('Hello FilasProvider Provider');
  }

  getFilas() {
    return this.http.get(this.baseURL+ 'rest/filas'); 
  }
}

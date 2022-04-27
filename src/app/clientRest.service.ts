
// creato con 
// ng generate service clientRestService
import { HttpClient }  from'@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class clientRestService {
  dato!:string;
  headers={'Content-Type' : 'application/json' };

  constructor( private restclient : HttpClient){}

  httpGet(url:string){
    return this.restclient.get<any>(url , { headers: this.headers } )  // restituisce un Observable
  }

  httpPost(url:string , postData:any){
    return this.restclient.post<any>(url , postData,  { headers: this.headers }   )  // restituisce un Observable
  }
}

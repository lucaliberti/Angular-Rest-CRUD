import { Component, OnInit } from '@angular/core';
import { clientRestService } from "../../clientRest.service";
import { Observable, Subscription } from "rxjs"; // importare questo modulo



@Component({
  selector: 'app-get2-component',
  templateUrl: './get2-component.component.html',
  styleUrls: ['./get2-component.component.css']
})


export class Get2Component implements OnInit {
  componentName="Get2Component"

  isFething=false;
  httpRequestString:string="https://jsonplaceholder.typicode.com/posts"    // GET
  httpResponse:any[]=["-"];
  typedResponse: { title: string , body: string}[]=[];
  subscription!: Subscription;

  ngOnInit(): void { }
  constructor( private restClient:clientRestService) { }

  makeHttpRequest1(){
    this.isFething=true;
    let observable = this.restClient.httpGet(this.httpRequestString);
    this.subscription = observable.subscribe((httpResponse) => {
      this.setData1(httpResponse);
    });
  }

  

  setData1(data: any[]) {
    this.httpResponse = data;
    //data.map( e => {})
    this.isFething = false;
  }


  makeHttpRequest2(){
    this.isFething=true;
    let observable = this.restClient.httpGet(this.httpRequestString);
    this.subscription = observable.subscribe(
      {
        next: (httpResponse) => { this.setData2(httpResponse); },
        error: response => { console.log("POST call in error", response);  this.isFething = false;  this.httpResponse = ["errore"];},
        complete: () => { console.log("The POST observable is now completed."); this.isFething = false; }
      })
  }


  // "userId": 
  // "id": 1,
  // "title": 
  // "body":  
  setData2(data: { userId:string, id: number , title:string , body:string}[]) {
    this.httpResponse = data;
    this.typedResponse= this.httpResponse
      .filter( e => { if (e.id < 10 )  { return e }})
      .map( e => { return { title:  e.title , body: e.body }})
     
    this.isFething = false;
  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log("oggetto observable distrutto ");
    }
  }

}


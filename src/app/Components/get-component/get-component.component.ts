import { Component, OnInit } from '@angular/core';
import { clientRestService } from "../../clientRest.service";
import { Observable, Subscription } from "rxjs"; // importare questo modulo



@Component({
  selector: 'app-get-component',
  templateUrl: './get-component.component.html',
  styleUrls: ['./get-component.component.css']
})


export class GetComponent implements OnInit {
  componentName="GetComponent"

  isFething=false;
  httpRequestString:string="https://jsonplaceholder.typicode.com/posts"    // GET
  httpResponse:any="-";
  subscription!: Subscription;

  ngOnInit(): void { }
  constructor( private restClient:clientRestService) { }

  makeHttpRequest(){
    this.isFething=true;
    let observable = this.restClient.httpGet(this.httpRequestString);
    this.subscription = observable.subscribe(
      {
        next: (httpResponse) => { this.setData(httpResponse); },
        error: response => { console.log("POST call in error", response);  this.isFething = false;  this.httpResponse = "erroe";},
        complete: () => { console.log("The POST observable is now completed."); this.isFething = false; }
      })
  }



  setData(data: any) {
    this.httpResponse = data;
    this.isFething = false;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log("oggetto observable distrutto ");
    }
  }

}


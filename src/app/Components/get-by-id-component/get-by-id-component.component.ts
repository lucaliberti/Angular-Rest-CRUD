import { Component, OnInit } from '@angular/core';
import { clientRestService } from "../../clientRest.service";
import { Observable, Subscription } from "rxjs"; // importare questo modulo


@Component({
  selector: 'app-get-by-id-component',
  templateUrl: './get-by-id-component.component.html',
  styleUrls: ['./get-by-id-component.component.css']
})

export class GetByIdComponent implements OnInit {
  
  componentName="GetByIdComponent"

  isFething=false;
  httpRequestString:string="https://jsonplaceholder.typicode.com/posts/1"    // GET
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


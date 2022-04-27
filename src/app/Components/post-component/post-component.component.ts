import { Component, OnInit } from '@angular/core';
import { clientRestService } from "../../clientRest.service";
import { Observable, Subscription } from "rxjs"; // importare questo modulo





@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css'],
})
export class PostComponent implements OnInit {

  componentName = 'PostComponent';

  isFething = false;
  httpRequestString: string = 'https://jsonplaceholder.typicode.com/posts'; // POST
  httpResponse: any = '-';
  subscription!: Subscription;
  postData= {
    "title": 'ciccio',
    "body": 'pasticcio',
    "userId": 99 
  }

  ngOnInit(): void {}
  constructor(private restClient: clientRestService) {}

  makeHttpRequest() {
    this.isFething = true;
    let observable = this.restClient.httpPost(this.httpRequestString, this.postData );
    this.subscription = observable.subscribe(
      {
        next: (httpResponse) => {this.setData(httpResponse); } , 
        error: response => { console.log("POST call in error", response);  this.isFething = false;  this.httpResponse = "erroe";},
        complete: () => { console.log("The POST observable is now completed."); this.isFething = false; }
      }
    );
  }

  setData(data: any) {
    this.httpResponse = data;
    console.log(data)
    this.isFething = false;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log('oggetto observable distrutto ');
    }
  }
}

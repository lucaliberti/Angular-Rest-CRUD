import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent }           from './app.component';

import { GetByIdComponent }  from './Components/get-by-id-component/get-by-id-component.component';
import { GetComponent }      from './Components/get-component/get-component.component';
import { Get2Component }      from './Components/get2-component/get2-component.component';
import { PostComponent }     from './Components/post-component/post-component.component';

@NgModule({
  declarations: [
    AppComponent,
    GetComponent, Get2Component ,
    PostComponent,
    GetByIdComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

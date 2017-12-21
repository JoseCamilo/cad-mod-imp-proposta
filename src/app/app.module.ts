import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { DragulaModule } from 'ng2-dragula';
import { InnerView } from "./myInnerHtml";


@NgModule({
  declarations: [
    AppComponent,
    InnerView
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    DragulaModule
  ],
  providers: [
    InnerView
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

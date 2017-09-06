import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import ListModule from './list/list.module';

import AppComponent from './app.component';

@NgModule({
  imports: [ BrowserModule, CommonModule, ListModule, HttpModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

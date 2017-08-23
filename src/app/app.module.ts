import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import ListModule from './list/list.module';

import AppComponent from './app.component';

@NgModule({
  imports: [ BrowserModule, CommonModule, ListModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

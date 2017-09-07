import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import ListModule from './list/list.module';
import IntroModule from './intro/intro.module';

import { AppRoutingModule } from './app.router';
import AppComponent from './app.component';

@NgModule({
  imports: [ BrowserModule, CommonModule, ListModule, IntroModule, HttpModule, AppRoutingModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

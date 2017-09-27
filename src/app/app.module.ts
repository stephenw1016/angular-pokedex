import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import AppRoutingModule from './app.routing';
import DetailModule from "./detail/detail.module";
import ListModule from './list/list.module';
import PokemonModule from "./pokemon/pokemon.module";

import AppComponent from './app.component';

import '../global.css';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    DetailModule,
    HttpModule,
    ListModule,
    PokemonModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

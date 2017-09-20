import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import ListModule from './list/list.module';
import DetailModule from "./detail/detail.module";
import PokemonModule from "./pokemon/pokemon.module";
import AppComponent from './app.component';

@NgModule({
  imports: [ BrowserModule, CommonModule, HttpModule, ListModule, DetailModule, PokemonModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

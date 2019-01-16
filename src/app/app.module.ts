import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import AppRoutingModule from './app.routing';
import DetailModule from './detail/detail.module';
import ListModule from './list/list.module';
import PokemonModule from './pokemon/pokemon.module';
import StorageModule from './storage/storage.module';

import AppComponent from './app.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    DetailModule,
    HttpClientModule,
    ListModule,
    PokemonModule,
    StorageModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

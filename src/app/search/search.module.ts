import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import SearchComponent from './search.component';
import PokemonPipe from './search.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [
    SearchComponent,
    PokemonPipe
  ],
  exports: [
    SearchComponent,
    PokemonPipe
  ]
})
export default class SearchModule {}

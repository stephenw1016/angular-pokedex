import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import ListComponent from './list.component';
import SearchModule from '../search/search.module';
import PokemonModule from '../pokemon/pokemon.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    PokemonModule,
    CommonModule,
    RouterModule,
    SearchModule
  ],
  declarations: [
    ListComponent
  ],
  exports: [
    ListComponent
  ],
})
export default class ListModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import PokemonService from './pokemon.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    PokemonService
  ]
})
export default class PokemonModule {}

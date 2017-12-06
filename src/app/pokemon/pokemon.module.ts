import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import PokemonService from './pokemon.service';
import PokemonCardComponent from './pokemon-card/pokemon-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    PokemonCardComponent
  ],
  exports: [
    PokemonCardComponent
  ],
  providers: [
    PokemonService
  ]
})
export default class PokemonModule {}

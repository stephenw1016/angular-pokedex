import { NgModule } from '@angular/core';
import PokemonService from './pokemon.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ CommonModule ],
  providers: [ PokemonService ]
})
export default class PokemonModule {}

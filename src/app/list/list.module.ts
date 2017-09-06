import { NgModule } from '@angular/core';
import ListComponent from './list.component';
import { CommonModule } from '@angular/common';
import PokemonModule from "../pokemon/pokemon.module";

@NgModule({
  declarations: [ ListComponent ],
  imports: [ CommonModule, PokemonModule ],
  exports: [ ListComponent ]
})
export default class ListModule {}

import { Pipe, PipeTransform } from '@angular/core';

import { Pokemon } from '../pokemon/types';

@Pipe({
  name: 'pokemonPipe'
})
export default class PokemonPipe implements PipeTransform {
  transform(criteria: string, pokemon: Array<Pokemon>): Array<Pokemon> {
    return pokemon.filter(p => p.name.indexOf(criteria) !== -1);
  }
}

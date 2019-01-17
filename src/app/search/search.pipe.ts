import { Pipe, PipeTransform } from '@angular/core';

import { Pokemon } from '../pokemon/types';

@Pipe({
  name: 'pokemonPipe'
})
export default class PokemonPipe implements PipeTransform {
  transform(criteria: string, pokemon: Array<Pokemon>): Array<Pokemon> {
    const searchString = criteria.toLowerCase();
    return pokemon.filter(({ name }: Pokemon) => name.includes(searchString));
  }
}

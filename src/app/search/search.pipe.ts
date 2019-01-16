import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonPipe'
})
export default class PokemonPipe implements PipeTransform {
  transform(criteria: any, pokemon: any[]) {
    console.log('trivially piping data.', pokemon);
    return pokemon.filter(p => p.name.indexOf(criteria) !== -1);
  }
}

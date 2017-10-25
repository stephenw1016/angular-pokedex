import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonPipe'
})
export default class PokemonPipe implements PipeTransform {
  transform(criteria: any, data: any[]) {
    console.log("trivially piping data.");
    return data;
  }
}

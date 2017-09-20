import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export default class PokemonService {
  constructor(private http:Http){}

  getPokemonList() {
    return this.http.get(`http://pokeapi.co/api/v2/pokemon`)
      .map(res => {
        return res.json().results.map((item: any) => {
  				let ids = item.url.match(/.*\/(\d+)\//);
  				item.id = ids[1];
  				return item;
  			});
      });
  }

    getPokemon(id : number) {
        return this.http.get(`http://pokeapi.co/api/v2/pokemon/${id}`)
            .map(res => res.json());
    }
}

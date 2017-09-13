import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export default class PokemonService {
  constructor(private http:Http){}

  getPokemon(id = '') {
    return this.http.get(`http://pokeapi.co/api/v2/pokemon/${id}`)
      .map(res => {
        return res.json().results.map((item: any) => {
  				let ids = item.url.match(/http:\/\/pokeapi\.co\/api\/v2\/pokemon\/(\d+)\//);
  				item.id = ids[1];
  				return item;
  			});
      });
  }
}

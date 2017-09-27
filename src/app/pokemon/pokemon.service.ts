import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';


@Injectable()
export default class PokemonService {

  private list: Observable<Array<object>>;

  constructor(private http: Http) {}

  getPokemonList () {
    if (!this.list) {
      this.list = this.http.get('https://pokeapi.co/api/v2/pokemon')
        .map(res => {
          let data = res.json().results.map((item: any) => {
    		let ids = item.url.match(/.*\/(\d+)\//);
    		item.id = ids[1];
    		return item;
          });

          console.info('getPokemonList():', data);
          return data;
        })
        .publishReplay(1)
        .refCount();
    }

    return this.list;
  }

  getPokemon (id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .map(res => {
        let data = res.json();

        console.info(`getPokemon(${id}):`, data);
        return data;
      });
    }
}

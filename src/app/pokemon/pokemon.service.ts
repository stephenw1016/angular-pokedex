import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import { Observable } from 'rxjs/Observable';

@Injectable()
export default class PokemonService {
  private list : Observable<Array<object>>;

  constructor(private http : Http){}

  getPokemonList() {
    if(!this.list){
      this.list = this.http.get(`https://pokeapi.co/api/v2/pokemon`)
        .map(res => {
          return res.json().results.map((item: any) => {
    				let ids = item.url.match(/.*\/(\d+)\//);
    				item.id = ids[1];
    				return item;
    			});
        })
        .publishReplay(1, 60000)
        .refCount();
    }
    return this.list;
  }

    getPokemon(id : number) {
      return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .map(res => res.json());
    }
}

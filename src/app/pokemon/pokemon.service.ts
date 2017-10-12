import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';


@Injectable()
export default class PokemonService {

  private list: Observable<Array<object>>;
  private baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: Http) {}

  getPokemonList() {
    if (!this.list) {
      this.list = this.http.get(`${this.baseUrl}pokemon`)
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

  getPokemon(id: number) {
    // let url = `${this.baseUrl}pokemon/${id}`;
    let testUrl = './data/sample-pokemon.json';

    return this.http.get(testUrl).map(res => {
      let data = res.json();
      data.pic = `http://res.cloudinary.com/dwnebujkh/image/upload/v1473910425/pokemon/${id}.png`;
      console.info(`getPokemon(${id}):`, JSON.stringify(data, null, '  '));
      return data;
    });
  }
}

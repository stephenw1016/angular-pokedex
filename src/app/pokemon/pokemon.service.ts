import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import StorageService from '../storage/storage.service';


@Injectable()
export default class PokemonService {

  private baseUrl = 'https://pokeapi.co/api/v2/';
  private listPrefix = 'pokelist-';
  private pokemonPrefix = 'pokemon-';

  constructor(private http: Http, private storageService: StorageService) {}

  getCachedList(){
    return this.storageService.get(this.listPrefix);
  }

  getCachedPokemon(id: number){
    return this.storageService.get(this.pokemonPrefix + id);
  }

  getAllPokemon() {
    let cache = this.getCachedList();
    let url = `${this.baseUrl}pokemon/?limit=10000`;

    let formatList = (res: any) => {
      let data = res.json().results
        .map((item: any) => {
          let ids = item.url.match(/.*\/(\d+)\//);
          item.id = ids[1];
          return item;
        });

      console.info('getAllPokemon():', data);
      this.storageService.set(this.listPrefix, data);
      return data;
    };

    return cache ? Observable.of(cache) : this.http.get(url)
      .map(formatList);
  }

  getPokemon(id: number) {
    let cache = this.getCachedPokemon(id);
    let url = `${this.baseUrl}pokemon/${id}`;

    let formatPokemon = (res: any) => {
      let data = res.json();
      data.pic = `http://res.cloudinary.com/dwnebujkh/image/upload/v1473910425/pokemon/${id}.png`;

      this.storageService.set(this.pokemonPrefix + id, data);
      console.info(`getPokemon(${id}):`, JSON.stringify(data, null, '  '));

      return data;
    };

    return cache ? Observable.of(cache) : this.http.get(url)
      .map(formatPokemon);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import StorageService from '../storage/storage.service';

@Injectable()
export default class PokemonService {
  private baseUrl = 'http://localhost:3000/pokemon/';
  private listPrefix = 'pokelist-';
  private pokemonPrefix = 'pokemon-';

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  getCachedList(){
    return this.storageService.get(this.listPrefix);
  }

  getCachedPokemon(id: number){
    return this.storageService.get(this.pokemonPrefix + id);
  }

  getAllPokemon() {
    const cache = this.getCachedList();
    const url = `${this.baseUrl}pokemon/?limit=10000`;

    const formatPokemonList = map((res: any) => {
      const data = res.json().results
        .map((item: any) => {
          let ids = item.url.match(/.*\/(\d+)\//);
          item.id = ids[1];
          return item;
        });

      console.info('getAllPokemon():', data);
      this.storageService.set(this.listPrefix, data);
      return data;
    });

    return cache
      ? of(cache)
      : this.http.get(url).pipe(formatPokemonList);
  }

  getPokemon(id: number) {
    const cache = this.getCachedPokemon(id);
    const url = `${this.baseUrl}pokemon/${id}`;

    const formatPokemon = map((res: any) => {
      let data = res.json();
      data.pic = `http://res.cloudinary.com/dwnebujkh/image/upload/v1473910425/pokemon/${id}.png`;

      this.storageService.set(this.pokemonPrefix + id, data);
      console.info(`getPokemon(${id}):`, JSON.stringify(data, null, '  '));

      return data;
    });

    return cache
      ? of(cache)
      : this.http.get(url).pipe(formatPokemon);
  }
}

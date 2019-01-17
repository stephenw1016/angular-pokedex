import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Pokemon, PokemonDetailResponse, PokemonListResponse } from './types';
import StorageService from '../storage/storage.service';

@Injectable()
export default class PokemonService {
  private baseUrl = 'http://localhost:3000/pokemon/';
  private imageUrl = 'http://res.cloudinary.com/dwnebujkh/image/upload/v1473910425/pokemon/';
  private pokemonListPrefix = 'pokelist-';
  private pokemonPrefix = 'pokemon-';

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  /**
   * Create a Pokemon type.
   * @param id - a pokemon's id
   * @param name - a pokemon's name
   */
  private createPokemon(id: string | number, name: string): Pokemon {
    return {
      id: `${id}`,
      name,
      pic: `${this.imageUrl}${id}.png`,
    };
  }

  /**
   * Fetch all pokemon from the API.
   */
  private requestPokemon(): Observable<PokemonListResponse> {
    const url = `${this.baseUrl}?limit=10000`;

    return this.http.get<PokemonListResponse>(url);
  }

  /**
   * Fetch a specific pokemon from the API.
   * @param id - a pokemon's id
   */
  private requestPokemonById(id: number): Observable<PokemonDetailResponse> {
    const url = `${this.baseUrl}${id}`;

    return this.http.get<PokemonDetailResponse>(url);
  }

  /**
   * Get all pokemon.
   */
  getAllPokemon(): Observable<Array<Pokemon>> {
    const cachedPokemonList = this.storageService.get(this.pokemonListPrefix);

    if (cachedPokemonList) {
      return of(cachedPokemonList);
    }

    const formatPokemonList = map(({ results }: PokemonListResponse) => {
      return results.map((item: { name: string, url: string }) => {
        const id = item.url.match(/.*\/(\d+)\//)[1];
        return this.createPokemon(id, item.name);
      });
    });

    const cacheResults = map(( pokemonList: Array<Pokemon>) => {
      this.storageService.set(this.pokemonListPrefix, pokemonList);
      return pokemonList;
    });

    return this.requestPokemon()
      .pipe(formatPokemonList)
      .pipe(cacheResults);
  }

  /**
   * Get a specific Pokemon by id.
   * @param id - a pokemon's id
   */
  getPokemon(id: number): Observable<Pokemon> {
    const cachedPokemon = this.storageService.get(this.pokemonPrefix + id);

    if (cachedPokemon) {
      return of(cachedPokemon);
    }

    const formatPokemon = map((response: PokemonDetailResponse) => {
      return this.createPokemon(id, response.name);
    });

    const cacheResults = map(( pokemon: Pokemon) => {
      this.storageService.set(this.pokemonPrefix + id, pokemon);
      return pokemon;
    });

    return this.requestPokemonById(id)
      .pipe(formatPokemon)
      .pipe(cacheResults);
  }
}

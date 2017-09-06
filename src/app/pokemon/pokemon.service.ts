import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export default class PokemonService {
    constructor(private http:Http){}

    getPokemon(id = '') {
       return this.http.get(`http://pokeapi.co/api/v2/pokemon/${id}`);
    }
}
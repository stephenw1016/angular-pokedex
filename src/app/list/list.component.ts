import {Component} from '@angular/core';
import PokemonService from '../pokemon/pokemon.service';

@Component({
	selector: 'poke-list',
	templateUrl: './list.component.html'
})

export default class ListComponent {
	public pokeList : any[];
	public title : string;

	constructor(
		private pokemonService : PokemonService
	) {
		console.log(this.pokemonService);
		this.title = 'Static Html';
		this.pokemonService.getPokemon().subscribe(data => {
			console.log(data);
		}, err => {
			console.error(err);
		});
		this.pokeList = [

		];
	}
}
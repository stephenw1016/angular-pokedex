import {Component} from '@angular/core';
import PokemonService from '../pokemon/pokemon.service';

@Component({
	selector: 'poke-list',
	templateUrl: './list.component.html',
	styles: [`
		ul { list-style: none; margin:0; padding:0; }
		li { margin:10 0; }
		img { max-width:100px; clear: both }
	`]
	// styleUrls: ['./list.component.css']
})

export default class ListComponent {
	public pokeList : any[];

	constructor(
		private pokemonService : PokemonService
	) {
		console.log(this.pokemonService);
		this.pokemonService.getPokemon().subscribe((data:any) => {
			console.log(data);
			this.pokeList = data.map((item: any) => {
				item.pic = `http://res.cloudinary.com/dwnebujkh/image/upload/v1473910425/pokemon/${item.id}.png`;
				return item;
			})
		}, (err:any) => {
			console.error(err);
		});
	}
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import PokemonService from '../pokemon/pokemon.service';
import {Subscription} from "rxjs/Subscription";

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

export default class ListComponent implements OnInit, OnDestroy {
	public pokeList : any[];
	private pokeSubscription : Subscription;

	constructor(
		private pokemonService : PokemonService
	) {}

	ngOnInit() {
		console.log(this.pokemonService);
		this.pokeSubscription = this.pokemonService.getPokemonList().subscribe((data:any) => {
			console.log(data);
			this.pokeList = data.map((item: any) => {
				item.pic = `http://res.cloudinary.com/dwnebujkh/image/upload/v1473910425/pokemon/${item.id}.png`;
				item.url = `pokemon/details/${item.id}`;
				return item;
			})
		}, (err:any) => {
			console.error(err);
		});
	}

	ngOnDestroy() {
		this.pokeSubscription.unsubscribe();
	}
}

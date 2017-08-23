import {Component} from '@angular/core';

@Component({
	selector: 'poke-list',
	templateUrl: './list.component.html'
})

export default class ListComponent{
	public pokeList : any[];
	constructor(){
		this.pokeList = [
			{
				name: 'Bulbasaur'
			},
			{
				name: 'Pikachu'
			}
		];
	}
}
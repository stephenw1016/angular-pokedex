import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import PokemonService from '../pokemon/pokemon.service';

@Component({
  selector: 'poke-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export default class ListComponent implements OnInit, OnDestroy {

  public pokeList: any[];
  private pokeSubscription: Subscription;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokeSubscription = this.pokemonService.getPokemonList().subscribe((data: any) => {
      this.pokeList = data.map((item: any) => {
         item.pic = `http://res.cloudinary.com/dwnebujkh/image/upload/v1473910425/pokemon/${item.id}.png`;
         return item;
      })
    }, (err: any) => console.error(err));
  }

  ngOnDestroy() {
    this.pokeSubscription.unsubscribe();
  }
}

import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Pokemon } from '../pokemon/types';
import PokemonService from '../pokemon/pokemon.service';

@Component({
  selector: 'poke-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export default class DetailComponent implements OnInit, OnDestroy {
  public pokemon: Pokemon;
  private pokeSubscription: Subscription;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.pokeSubscription = this.route.params.subscribe((params: Params) => {
      this.pokemonService.getPokemon(params.id).subscribe((data: Pokemon) => {
        this.pokemon = data;
      }, (err: any) => {
          console.error(err);
      });
    });
  }

  ngOnDestroy() {
    this.pokeSubscription.unsubscribe();
  }
}

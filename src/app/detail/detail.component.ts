import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import PokemonService from "../pokemon/pokemon.service";
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    templateUrl : './detail.component.html',
    selector : 'poke-detail'
})

export default class DetailComponent implements OnInit, OnDestroy {

    public pokemon: object;
    private pokeSubscription: Subscription;

    constructor(
        private pokemonService: PokemonService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.pokeSubscription = this.route.params.subscribe((params : Params) => {
            this.pokemonService.getPokemon(params.id).subscribe((data:any) => {
                console.log(data);
                data.pic = `http://res.cloudinary.com/dwnebujkh/image/upload/v1473910425/pokemon/${data.id}.png`;

                this.pokemon = data;
            }, (err:any) => {
                console.error(err);
            });
        });

    }

    ngOnDestroy() {
        this.pokeSubscription.unsubscribe();
    }
}
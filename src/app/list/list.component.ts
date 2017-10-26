import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import PokemonService from '../pokemon/pokemon.service';
import PokemonPipe from '../search/search.pipe';

@Component({
  selector: 'poke-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [PokemonPipe]
})
export default class ListComponent implements OnInit, OnDestroy {
  public currentPage = 0;
  public isFirstPage = true;
  public isLastPage = true;
  public pokeList: any[];

  private pokeSubscription: Subscription;
  private criteria = "";

  constructor(
    private pokemonService: PokemonService,
    private pokemonPipe: PokemonPipe
  ) {}

  ngOnInit() {
    this.goToPage(0);
  }

  ngOnDestroy() {
    this.pokeSubscription.unsubscribe();
  }

  getPokemonSublist(pageNumber = 0, pageSize = 20) {
    let firstIndex = pageNumber * pageSize;
    let lastIndex = firstIndex + pageSize;

    this.isFirstPage = !pageNumber;
    return this.pokemonService.getAllPokemon().map(data => {
      data = this.pokemonPipe.transform(this.criteria, data);
      this.isLastPage = pageNumber === Math.ceil(data.length / pageSize) - 1;

      return data.slice(firstIndex, lastIndex);
    });
  }

  goToPage(pageNumber: number) {
    this.pokeSubscription = this.getPokemonSublist(pageNumber).subscribe((data: any) => {
      this.currentPage = pageNumber;
      this.pokeList = data.map((item: any) => {
        item.pic = `http://res.cloudinary.com/dwnebujkh/image/upload/v1473910425/pokemon/${item.id}.png`;
        return item;
      });
    }, (err: any) => console.error(err));
  }

  refreshList(criteria: string) {
    this.criteria = criteria;
    this.goToPage(0);
  }

  previousPage() {
    if (this.currentPage == 0) return;
    this.goToPage(--this.currentPage);
  }

  nextPage() {
    this.goToPage(++this.currentPage);
  }
}

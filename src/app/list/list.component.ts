import { Component, OnDestroy, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { Pokemon } from '../pokemon/types';
import PokemonService from '../pokemon/pokemon.service';
import PokemonPipe from '../search/search.pipe';

@Component({
  selector: 'poke-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [PokemonPipe],
  animations: [
    trigger('listState', [
      state('entering', style({ opacity: 0.1 })),
      state('entered', style({ opacity: 1 })),
      transition('entering => entered', [
        animate('250ms'),
      ]),
    ]),
  ],
})
export default class ListComponent implements OnInit, OnDestroy {
  public currentPage = 0;
  public isFirstPage = true;
  public isLastPage = true;
  public pokeList: Array<Pokemon>;
  public filteredSize: number;
  public listState: string = 'entering';

  private pokemonSubscription: Subscription;
  private criteria = '';

  constructor(
    private pokemonService: PokemonService,
    private pokemonPipe: PokemonPipe
  ) {}

  ngOnInit() {
    this.goToPage(0);

    setTimeout(() => {
      this.listState = 'entered';
    }, 250);
  }

  ngOnDestroy() {
    this.pokemonSubscription.unsubscribe();
  }

  /**
   * Get a subset of all available Pokemon with paging and search criteria.
   * @param pageNumber - the page number of the list
   * @param pageSize - the amount of pokemon to return
   */
  private getPokemonSublist(pageNumber = 0, pageSize = 20): Observable<Array<Pokemon>> {
    const firstIndex = pageNumber * pageSize;
    const lastIndex = firstIndex + pageSize;

    const filterBySearchCriteria = map((pokemonList: Array<Pokemon>) => {
      const filteredPokemon = this.pokemonPipe.transform(this.criteria, pokemonList);
      this.filteredSize = filteredPokemon.length;
      this.isLastPage = pageNumber === Math.ceil(filteredPokemon.length / pageSize) - 1;

      return filteredPokemon.slice(firstIndex, lastIndex);
    });

    return this.pokemonService.getAllPokemon().pipe(filterBySearchCriteria);
  }

  /**
   * Jump to a certain page of all the paginated pokemon.
   * @param pageNumber - the page number of the list
   */
  private goToPage(pageNumber = 0): void {
    this.isFirstPage = pageNumber === 0;
    this.pokemonSubscription = this.getPokemonSublist(pageNumber).subscribe((data: any) => {
      this.currentPage = pageNumber;
      this.pokeList = data.map((item: any) => {
        item.pic = `http://res.cloudinary.com/dwnebujkh/image/upload/v1473910425/pokemon/${item.id}.png`;
        return item;
      });
    }, (err: any) => console.error(err));
  }

  /**
   * Update the Pokemon list by applying the provided search criteria.
   * @param criteria
   */
  refreshList(criteria: string): void {
    this.criteria = criteria;
    this.goToPage(0);
  }

  /**
   * Allow the user to request the previous page.
   */
  previousPage(): void {
    if (this.currentPage == 0) {
      return;
    }

    this.goToPage(--this.currentPage);
  }

  /**
   * Allow the user to request the next page.
   */
  nextPage(): void {
    this.goToPage(++this.currentPage);
  }
}

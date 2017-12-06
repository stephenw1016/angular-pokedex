import { Component, Input } from '@angular/core';

@Component({
  selector: 'poke-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export default class PokemonCardComponent {
  @Input() public pokemon: object;
}
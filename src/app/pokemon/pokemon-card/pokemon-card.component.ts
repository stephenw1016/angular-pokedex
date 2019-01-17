import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'poke-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  animations: [
    trigger('imageState', [
      state('active', style({ transform: 'scale(1.2) translate(0, -10px)' })),
      state('inactive', style({})),
      transition('inactive => active', [animate('100ms')]),
      transition('active => inactive', [animate('50ms')]),
    ]),
  ],
})
export default class PokemonCardComponent {
  @Input() public pokemon: object;

  public imageState = 'inactive';
  public isActive = false;

  onMouseover(isActive: boolean) {
    this.isActive = isActive;
  }
}

import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export default class SearchComponent {
  @Input() public placeholder: string;
  @Output() public onGo = new EventEmitter<string>();

  public criteria = '';

  search() {
    console.log('emitting...', this.criteria);
    this.onGo.emit(this.criteria);
  }
}

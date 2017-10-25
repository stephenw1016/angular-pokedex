import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export default class SearchComponent {
  public criteria = "";

  @Output()
  public onGo = new EventEmitter<string>();

  search() {
    console.log("emitting...", this.criteria);
    this.onGo.emit(this.criteria);
  }
}

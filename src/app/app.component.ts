import { Component } from '@angular/core';

@Component({
  selector: 'poke-app',
  templateUrl: 'app.component.html'
})
export default class AppComponent {

  public title: string;

  constructor() {
    this.title = 'Static html';
  }
}

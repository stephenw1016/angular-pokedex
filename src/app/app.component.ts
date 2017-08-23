import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export default class AppComponent {
  title: string;
  constructor() {
    this.title = 'Static html';
  }
}

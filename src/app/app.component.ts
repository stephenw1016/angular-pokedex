import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1 class="app">
    {{ title }}
  </h1>
  `
})

export class AppComponent {
  title: string;
  constructor() {
    this.title = 'Static html';
  }
}

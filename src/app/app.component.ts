import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export default class AppComponent {
  title: string;
  constructor() {
    this.title = 'Static html';
  }
}

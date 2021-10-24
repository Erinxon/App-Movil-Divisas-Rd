import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Divisas', url: '/divisas', icon: 'cash' },
    { title: 'Calculadora', url: '/calculadora', icon: 'calculator' },
  ];
  constructor() {}
}

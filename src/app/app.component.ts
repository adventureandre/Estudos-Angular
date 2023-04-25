import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template : `
    <nav id="menu">
      <a routerLink="/home">Principal</a>
      <a routerLink="/about/123">Sobre</a>
    </nav>

<!--      <app-diretivas-atributos></app-diretivas-atributos>-->
      <!--<app-diretivas-estruturais></app-diretivas-estruturais>-->
      <!--    <app-data-binding></app-data-binding>-->
      <router-outlet></router-outlet>`
})
export class AppComponent{
constructor() {}
}

import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template : `
    <ng-template [ngIf]="getDados">
    <h1>{{getDados.nome}}</h1>
    <h2>{{getDados.idade}}</h2>
    </ng-template>
    <app-output (enviarDados)="setDados($event)"></app-output>
<!--    <app-input [contador]="addValue"></app-input>-->
<!--    <br>-->
<!--    <button (click)="add()">Add</button>-->
<!--    <app-new-component></app-new-component>-->
<!--    <app-diretivas-atributos></app-diretivas-atributos>-->
      <!--      <app-diretivas-atributos>-->
      <!--        <h1>Aulas de diretivas de Atributos</h1>-->
      <!--        <hr>-->
      <!--      </app-diretivas-atributos>-->
      <!--      <app-diretivas-estruturais></app-diretivas-estruturais>-->
      <!--    <app-data-binding></app-data-binding>-->
      <router-outlet></router-outlet>`
})
export class AppComponent{
constructor() {}
  public addValue:number = 0;
public add():void{
  this.addValue++
}

public getDados:{nome:string, idade:number} | undefined;

public setDados(event: { nome: string; idade: number; }){
  this.getDados = event
}

}

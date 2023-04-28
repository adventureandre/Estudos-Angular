import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  @Output() public enviarDados = new EventEmitter();

  public list: Array<{ nome: string, idade: number }> = [
    {nome: 'Andre', idade: 33},
    {nome: 'milena', idade: 22},
    {nome: 'Sivaldo', idade: 54}
  ]
  constructor() {
  }
  ngOnInit(): void {
  }
  getDados(event: number) {
    this.enviarDados.emit(this.list[event])
  }
}

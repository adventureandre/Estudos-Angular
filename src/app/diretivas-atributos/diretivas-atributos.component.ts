import {Component, OnInit} from '@angular/core';
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = true
  public height: string = '20px';
  backgroundColor: string = 'red'

  public date:Date =  new Date();
  public nome: string = ""
  public list: Array<{ nome: string }> = [{nome: 'andre'}]

  ngOnInit() {
    setInterval(() => {
      this.valor = !this.valor

      if (this.height === '20px') {
        this.height = '50px'
        this.backgroundColor = 'blue'
      } else {
        this.height = '20px'
      }
    }, 2000)
  }

  public salvar() {
    this.list.push({nome: this.nome})
    this.nome = ''
  }

  public mudaValor() {
    this.valor = !this.valor
  }

}

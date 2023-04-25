import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit{

  public valor :boolean = true

  ngOnInit() {
    // setInterval(()=>{
    //   this.valor = !this.valor
    // },2000)
  }

  public mudaValor(){
    this.valor = !this.valor
  }

}

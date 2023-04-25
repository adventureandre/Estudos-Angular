import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit{

  public valor :boolean = true
  public height:string = '20px';
  backgroundColor:string =  'red'

  ngOnInit() {
    setInterval(()=>{
      this.valor = !this.valor

      if(this.height === '20px'){
        this.height = '50px'
        this.backgroundColor = 'blue'
      }else{
        this.height = '20px'
      }
    },2000)
  }

  public mudaValor(){
    this.valor = !this.valor
  }

}

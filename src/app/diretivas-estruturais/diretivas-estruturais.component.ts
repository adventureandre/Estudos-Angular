import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condicao: boolean = true
  public condicaoClick: boolean = true

  ngOnInit() {
    setInterval((): any => {
      this.condicao = !this.condicao;

    }, 1000)
  }

  public onClick() {
    this.condicaoClick = !this.condicaoClick;
  }


  public list: Array<{ nome: string, idade:number }> = [
    {nome: "Andre Luiz", idade:33},
    {nome:'Milena Camilla', idade:22},
    {nome:'Eunice',idade:48},
    {nome:'Sivaldo',idade:53}
  ]

  public onClickAddList(){
    this.list.push({nome:"Nay",idade:31})
  }

  public onClickEventList(event: number){
    this.list.splice(event,1)
  }
}

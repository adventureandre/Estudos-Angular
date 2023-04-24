import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  nome: string = 'andre';
  idade: number = 34;
  checkedDisable:boolean = false;

  public position:{x:number, y:number} = {x:0, y:0};

  public alertInfo(valor:MouseEvent){
    console.log(valor)
    alert(valor.target);
  }

  public mouseMoveTest (valor :MouseEvent){
    this.position.x = valor.offsetX
    this.position.y = valor.offsetY
  }
}

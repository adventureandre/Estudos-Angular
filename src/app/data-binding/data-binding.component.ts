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

  public position:

  public alertInfo(valor:MouseEvent){
    console.log(valor)
  }

  public mouseMoveTest (valor :MouseEvent){
    console.log(valor)
  }
}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit{

  @Input() public title:string = "bem vindo";

  constructor() {}

  ngOnInit():void {}



}

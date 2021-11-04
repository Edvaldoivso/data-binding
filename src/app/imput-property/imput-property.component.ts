import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './imput-property.component.html',
  styleUrls: ['./imput-property.component.css']
})
export class ImputPropertyComponent implements OnInit {

//Variaveis

@Input("nome") nomeCurso : string = '';






  constructor() { }

  ngOnInit(): void {
  }

}

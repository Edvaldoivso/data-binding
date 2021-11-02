import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  //Declaração de Variaveis
  url: any = 'http://edvaldo.com';
  CursoAngular: boolean = true;
  urlImagem: String = 'https://lorempixel.com/400/200/nature/';

  //Métodos
  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() {}

  ngOnInit(): void {}
}

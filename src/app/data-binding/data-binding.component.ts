import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css'],
  //Boa pratica quando o é pouco fazer inline msm
  styles: [
    `
      .highlight {
        color: red;
        font-weight: bold;
      }
    `,
  ],
})
export class DataBindingComponent implements OnInit {
  //Declaração de Variaveis
  url: any = 'http://edvaldo.com';
  CursoAngular: boolean = true;
  urlImagem: String = 'https://lorempixel.com/400/200/nature/';
  valorAtual: string = '';
  valorSalvo = '';
  isMouseOver: boolean = false;
  nome: string = 'abc';
  nomeDoCurso: string = 'Angular';

  //Objetos
  pessoa: any = {
    nome: 'Edvaldo',
    idade: '29',

  };

  //Métodos
  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  getBotaoClicado() {
    alert('Botão Clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    //console.log();
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
    console.log('Muda Cor');
  }

  constructor() {}

  ngOnInit(): void {}
}

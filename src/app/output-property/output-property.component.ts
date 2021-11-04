import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
})
export class OutputPropertyComponent implements OnInit {
  //Variaveis

  //Metadados (Decorators)
  @Input() valor: number = 0;
  @Output() mudouValor = new EventEmitter();

  //Metodos

  incrementa() {
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  limpar() {
    this.valor = 10;
  }

  constructor() {}

  ngOnInit(): void {}
}

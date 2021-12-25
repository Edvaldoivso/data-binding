import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivangif',
  templateUrl: './diretivangif.component.html',
  styleUrls: ['./diretivangif.component.css']
})
export class DiretivangifComponent implements OnInit {

//Variaveis

cursos: string[] = ["Angular 2"];
mostrarCursos : boolean = false;
Display:boolean = true;

onMostrarCursos(){
  this.mostrarCursos = !this.mostrarCursos
  this.Display = !this.Display
  }


mostrar = ()=>{  
 if(this.Display == false) alert("Funcao Mostrar")
}


  constructor() { }

  ngOnInit(): void {
  }




}

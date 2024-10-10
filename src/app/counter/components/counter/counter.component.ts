
// fue creado con snipets de angular a- component

import { Component, OnInit } from '@angular/core';

// Esto es una plantilla
@Component({
  selector: 'app-counter',

  // Template hasta 4 lineas ``
  template: `
    <h3>counter: {{counter}}</h3>
    <!--por ej increaseBy() Adentro va de a cuento se quiere incrementar -->
    <button (click)="increaseBy(+1)">+1</button>
    <!-- Reset reinicia el valor del contador con el valor original de la variable -->
    <button (click)="resetCounter()">Reset</button>
    <!--por ej increaseBy() Adentro va de a cuento quiere se decrementar -->
    <button (click)="decreaseBy(-1)">-1</button>
  `
})

// Counter component se encarga del comportamiento de la plantilla
export class CounterComponent {
  public counter: number = 10;

  // void sirve para no devolver un valor
  increaseBy(value:number):void {
    this.counter += value;
  }

  decreaseBy(value:number):void{
    this.counter -=value;
  }

  resetCounter():void{
    this.counter = 10;
  }
}

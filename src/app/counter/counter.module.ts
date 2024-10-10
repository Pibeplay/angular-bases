import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  // Los módulos son visibles dentro del scope es decir dentro del directorio, esto es por defecto, pero si queremos que se pueda usar a nivel global dentro de la app lo tenemos que exportar
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule{}

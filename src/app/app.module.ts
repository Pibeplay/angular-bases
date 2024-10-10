// una app tiene demasiados componentes

// Como buena práctica lo recomendable es colocar primero los importactiones propias de Angular, Librerias de terceros y después byestro código

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/components/heroes.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  // Los modulos van en import.
  imports: [
    AppRoutingModule,
    BrowserModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

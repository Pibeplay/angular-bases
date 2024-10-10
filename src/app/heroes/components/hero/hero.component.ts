import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  // Get es una forma de crear una propiedad, es un método de clase que se usa como propiedad
  // Es un método que se ve como una propiedad
  get CapitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.name = 'Spiderman' ;
  }

  changeAge(): void {
    this.age = 25 ;
  }

  resetForm(): void {
    this.name = 'Ironman';
    this.age = 45
  }
}

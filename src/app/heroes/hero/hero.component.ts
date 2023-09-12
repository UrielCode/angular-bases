import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Iron Man';
  public age: number = 45;

  // getters: es un método pero parece propiedad, se suelen usar como propiedades
  get capitalizeName(): string{
    
    return this.name.toUpperCase();
  }

  // método
  heroDescription(): string{
    return `${this.name} - ${this.age}`
  }

  changeHero(): void{
    this.name = 'Spiderman';
  }

  changeAge(): void{
    this.age = 50;
  }

  resetForm():void {
    this.name = 'Iron Man'
    this.age = 45;
  }
}

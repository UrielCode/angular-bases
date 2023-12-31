import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Iron Man', 'Hulk', 'Thor'];
  public deletedHero?: string;

  // Borrar un héroe
  removeLastHero(): void{
    this.deletedHero = this.heroNames.pop();
    
  }
}

import { Injectable, EventEmitter } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingridientChanged = new EventEmitter<Ingridient[]>();
  private ingridient: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tomates', 15),
  ];

  constructor() { }

  getIngridients() {
    return this.ingridient.slice();
  }
  
  addIngridient(name: string, count: number) {
    this.ingridient.push(new Ingridient(name, count));
    this.ingridientChanged.emit(this.getIngridients());
  }
}

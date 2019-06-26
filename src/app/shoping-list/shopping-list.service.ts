import { Injectable, EventEmitter } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingridientChanged = new Subject<Ingridient[]>();
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
    this.ingridientChanged.next(this.getIngridients());
  }

  addIngridients(ingridients: Ingridient[]) {
    this.ingridient.push(...ingridients);
    this.ingridientChanged.next(this.getIngridients());
    console.log(this.ingridient);
  }
}

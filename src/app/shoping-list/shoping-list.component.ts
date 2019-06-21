import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.scss'],
  providers: [],
})
export class ShopingSistComponent implements OnInit {
  ingridients: Ingridient[] =[];

  constructor(
    private shoppingListService: ShoppingListService,
  ) {
  }

  ngOnInit() {
    this.ingridients = this.shoppingListService.getIngridients();
    this.shoppingListService.ingridientChanged.subscribe( ingridients => {
      this.ingridients = ingridients;
    } )
  }

  addIngridient(ingridient) {
    this.shoppingListService.addIngridient(ingridient.name, ingridient.amount);
  }
}

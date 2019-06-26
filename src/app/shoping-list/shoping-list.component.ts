import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.scss'],
  providers: [],
})
export class ShopingSistComponent implements OnInit, OnDestroy {
  ingridients: Ingridient[] =[];
  private subs: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
  ) {
  }

  ngOnInit() {
    this.ingridients = this.shoppingListService.getIngridients();
    this.subs = this.shoppingListService.ingridientChanged.subscribe( ingridients => {
      this.ingridients = ingridients;
    } )
  }

  addIngridient(ingridient) {
    this.shoppingListService.addIngridient(ingridient.name, ingridient.amount);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}

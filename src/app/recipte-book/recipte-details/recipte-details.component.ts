import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from 'src/app/shoping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipte-details',
  templateUrl: './recipte-details.component.html',
  styleUrls: ['./recipte-details.component.scss']
})
export class RecipteDetailsComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(
    private ingService: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.recipe = this.recipeService.getRecipeById(+params['id'])
      }
    );
  }

  addToShopingListHandler(event) {
    event.preventDefault();
    console.log(this.recipe.ingridients);
    this.ingService.addIngridients(this.recipe.ingridients);
  }

}

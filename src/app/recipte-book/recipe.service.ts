import {
  Injectable,
  EventEmitter
} from '@angular/core';
import {
  Recipe
} from './recipe.model';
import { Ingridient } from '../shared/ingridient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter < Recipe > ();
  private recipes: Recipe[] = [
    new Recipe(
      'Chicken',
      'Some tasty chicken',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/04/one-pot-poached-chicken.jpg?itok=R3NMZk-d',
      [
        new Ingridient('chicken', 1),
        new Ingridient('lemon', .5),
    ],
    ),
    new Recipe(
      'Chicken 2',
      'Some tasty chicken 2',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/04/one-pot-poached-chicken.jpg?itok=R3NMZk-d',
        [
          new Ingridient('chicken', 2),
          new Ingridient('lemon', 1),
      ],
    ),
  ]

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
}

import {
  Injectable,
  EventEmitter
} from '@angular/core';
import {
  Recipe
} from './recipe.model';
import { Ingridient } from '../shared/ingridient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new Subject < Recipe > ();
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Chicken',
      'Some tasty chicken',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/04/one-pot-poached-chicken.jpg?itok=R3NMZk-d',
      [
        new Ingridient('chicken', 1),
        new Ingridient('lemon', .5),
    ],
    ),
    new Recipe(
      2,
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

  getRecipeById(id: number): Recipe {
    const recipe = this.recipes.find((recipe) => +recipe.id === id);
    return recipe;
  }
}

import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'recipte-book',
  templateUrl: './recipte-book.component.html',
  styleUrls: ['./recipte-book.component.scss'],
  providers: [RecipeService],
})

export class RecipteBookComponent {
  selectedRecipe: Recipe;
  constructor(
    private recipeService: RecipeService,
  ) {
    this.recipeService.recipeSelected.subscribe( recipe => {
      this.selectedRecipe = recipe;
    } )
  }
}
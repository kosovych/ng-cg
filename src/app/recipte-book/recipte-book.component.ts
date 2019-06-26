import { Component, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'recipte-book',
  templateUrl: './recipte-book.component.html',
  styleUrls: ['./recipte-book.component.scss'],
  providers: [RecipeService],
})

export class RecipteBookComponent implements OnDestroy {
  selectedRecipe: Recipe;
  private sub: Subscription;

  constructor(
    private recipeService: RecipeService,
  ) {
    this.sub = this.recipeService.recipeSelected.subscribe( recipe => {
      this.selectedRecipe = recipe;
    } )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
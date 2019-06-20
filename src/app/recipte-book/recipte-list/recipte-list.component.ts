import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipte-list',
  templateUrl: './recipte-list.component.html',
  styleUrls: ['./recipte-list.component.scss']
})
export class RecipteListComponent implements OnInit {
  // @Output() recipesWasSelected: EventEmitter<any> = new EventEmitter<any>();
  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
  ) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  recipeSelected(recipe) {
    // this.recipesWasSelected.emit(recipe);
    this.recipeService.recipeSelected.emit(recipe)
  }

}

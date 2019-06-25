import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  recipeSelected(recipe) {
    // this.recipesWasSelected.emit(recipe);
    this.recipeService.recipeSelected.emit(recipe)
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}

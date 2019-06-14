import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'recipte-book',
  templateUrl: './recipte-book.component.html',
  styleUrls: ['./recipte-book.component.scss'],
})

export class RecipteBookComponent {
  selectedRecipe: Recipe;
  constructor() {

  }
}
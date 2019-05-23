import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipte-list',
  templateUrl: './recipte-list.component.html',
  styleUrls: ['./recipte-list.component.scss']
})
export class RecipteListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chicken', 'Some tasty chicken', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/04/one-pot-poached-chicken.jpg?itok=R3NMZk-d')
  ]
  constructor() {}

  ngOnInit() {
  }

}

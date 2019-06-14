import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipte-item',
  templateUrl: './recipte-item.component.html',
  styleUrls: ['./recipte-item.component.scss']
})
export class RecipteItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}

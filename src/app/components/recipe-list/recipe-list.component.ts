import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[];

  constructor() {
    this.recipes = [new Recipe('Banana Bread',
      'This is my favourite Banana Bread recipe. It contains magic, stars and good will.', null, null, null),
    new Recipe('Homestead Tofu',
      'This is my favourite Homestead Tofu recipe. It contains magic, stars and good will.', null, null, null)
    ];
  }
}

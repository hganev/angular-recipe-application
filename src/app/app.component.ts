import { Component } from '@angular/core';
import { Recipe } from './model/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes: Recipe[];

  constructor() {
    this.recipes = [new Recipe('Banana Bread',
      'This is my favourite Banana Bread recipe. It contains magic, stars and good will.' , null, null, null),
    new Recipe('Homestead Tofu',
      'This is my favourite Homestead Tofu recipe. It contains magic, stars and good will.' , null, null, null)
    ];
  }
}

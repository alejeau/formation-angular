import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from './recipe/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Excilys Cocktails'
  recipes: Recipe[] = new Array<Recipe>();

  ngOnInit() {
    const recipe_1 = new Recipe();
    const recipe_2 = new Recipe();

    recipe_1.name = 'Piña Colada';
    recipe_1.description = 'The Piña Colada is a classic tropical cocktail with rum, pineapple and coconut milk. This classic recipe ' +
      'will transport you to paradise. Getting caught in the rain is not required.';

    recipe_2.name = 'Bloody Mary, biatch!';
    recipe_2.description = 'The Bloody Mary is a vodka-soaked nutritional breakfast and hangover cure all in one. ' +
      'What else could you ask for?\n';

    this.recipes.push(recipe_1);
    this.recipes.push(recipe_2);
  }
}

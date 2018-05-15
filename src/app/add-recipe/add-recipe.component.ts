import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe/recipe.model';
import {RecipeService} from '../recipe/recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  recipe: Recipe;
  success: boolean;
  successMessage: string;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipe = new Recipe();
    this.success = false;
  }

  addRecipe(): void {
    this.recipeService.addRecipe(this.recipe).subscribe(
      recipe1 => {
        this.successMessage = 'The recipe has been added!';
        this.recipe = new Recipe();
      },
      errors => this.successMessage = 'There were errors while adding the recipe: ' + errors
    );
  }

}

import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.refreshList();
  }

  refreshList(): void {
    this.recipeService.getRecipes().subscribe(
      recipes => this.recipes = recipes,
      error => console.error('There were errors retrieving the recipes: ', error)
    );
  }
}

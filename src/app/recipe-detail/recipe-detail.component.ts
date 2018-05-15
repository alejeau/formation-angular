import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Recipe} from '../recipe/recipe.model';
import {RecipeService} from '../recipe/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipeId: string;
  recipe: Recipe;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipeById(this.recipeId).subscribe(
      recipe => this.recipe = recipe,
      error => console.error('There were errors retrieving the recipe: ', error)
    );
  }

}

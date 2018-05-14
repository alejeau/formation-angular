import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RECIPES} from '../recipes';
import {Recipe} from '../recipe/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipeId: string;
  recipe: Recipe;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    this.recipe = RECIPES[this.recipeId];
  }

}

import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {RECIPES} from '../recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  // getRecipes(): Observable<Recipe[]> {
  //   return of(RECIPES);
  // }

  getRecipes(): Recipe[] {
    return RECIPES;
  }

  getRecipeById(id: string) {
    return RECIPES[id];
  }
}

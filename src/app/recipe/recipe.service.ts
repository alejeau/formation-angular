import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {RECIPES} from '../recipes';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Observable<Recipe[]> {
    return of(RECIPES);
  }

  getRecipeById(id: string): Observable<Recipe> {
    return of(RECIPES[id]);
  }
}

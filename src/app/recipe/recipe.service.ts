import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
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
}

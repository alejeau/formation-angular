import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {RECIPES} from '../recipes';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private baseUrl = 'http://10.0.1.88:8080/api/v1';

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseUrl + '/recipes');
  }

  getRecipeById(id: string): Observable<Recipe> {
    // return this.http.get<Recipe>(this.baseUrl + '/recipes/' + id);
    return of(RECIPES[id]);
  }
}

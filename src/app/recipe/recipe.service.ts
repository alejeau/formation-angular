import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Observable} from 'rxjs';
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
    return this.http.get<Recipe>(this.baseUrl + '/recipes/' + id);
  }

  addRecipe(recipe: Recipe): Observable<Object> {
    return this.http.post(this.baseUrl + '/recipes/', recipe);
  }

  deleteRecipe(id: string): Observable<Object>  {
    return this.http.delete(this.baseUrl + '/recipes/' + id);
  }
}

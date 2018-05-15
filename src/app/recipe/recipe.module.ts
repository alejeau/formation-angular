import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipeComponent} from './recipe.component';
import {RecipesComponent} from './recipes/recipes.component';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {RouterModule} from '@angular/router';
import {RecipeService} from './recipe.service';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule
  ],
  exports: [
    RecipesComponent
  ],
  providers: [RecipeService],
  declarations: [
    RecipeComponent,
    RecipesComponent
  ]
})
export class RecipeModule { }

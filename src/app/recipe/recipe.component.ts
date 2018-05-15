import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input()
  recipe: Recipe;

  @Output()
  delete = new EventEmitter<Recipe>();

  display: boolean;
  displayButton: string;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.display = false;
    this.displayButton = 'EXPAND';
  }

  toggleExpanded(): void {
    this.display = !this.display;
    this.displayButton = this.display ? 'COLLAPSE' : 'EXPAND';
  }

  deleteRecipe(id: string): void {
    this.recipeService.deleteRecipe(id).subscribe(
      () => this.delete.emit(this.recipe)
    );

  }

}

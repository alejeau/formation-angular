import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input()
  recipe: Recipe;

  display: boolean;
  displayButton: string;

  ngOnInit() {
    this.display = false;
    this.displayButton = 'EXPAND';
  }

  toggleExpanded(): void {
    this.display = !this.display;
    this.displayButton = this.display ? 'COLLAPSE' : 'EXPAND';
  }

}

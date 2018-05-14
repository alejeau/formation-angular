import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe/recipe.model';
import {recipes} from './recipes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  recipes: Recipe[] = recipes;

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipeId: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipeId = this.route.snapshot.paramMap.get('id');
  }

}

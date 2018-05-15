import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe/recipe.model';
import {RecipeService} from '../recipe/recipe.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  success: boolean;
  successMessage: string;
  recipeForm: FormGroup;

  constructor(private recipeService: RecipeService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.success = false;
  }

  addRecipe(): void {
    const recipe = new Recipe();
    recipe.name = this.recipeForm.controls.name.value;
    recipe.picture = this.recipeForm.controls.url.value;
    recipe.description = this.recipeForm.controls.desc.value;
    recipe.instructions = this.recipeForm.controls.instr.value;

    this.recipeService.addRecipe(recipe).subscribe(
      () => {
        this.successMessage = 'The recipe has been added!';
        this.rebuildForm();
      },
      errors => this.successMessage = 'There were errors while adding the recipe: ' + errors
    );
  }

  createForm() {
    this.recipeForm = this.fb.group({
      name: ['', Validators.required],
      url: '',
      desc: '',
      instr: '',
    });
  }

  rebuildForm() {
    this.recipeForm.reset({
      name: '',
      url: '',
      desc: '',
      instr: '',
    });
  }

}

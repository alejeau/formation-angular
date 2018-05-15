import { Ingredient } from './ingredient.model';

export class Recipe {

  name: string;
  picture: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string;
  id: number;

}


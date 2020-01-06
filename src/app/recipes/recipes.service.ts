import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: '1213',
      title: 'Recipe One',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOH-eNSw0x2PnCpazactoPcdc1Lps6uB1zOMVT0V8w7hmvaXQI&s',
      ingredients: ['itemOne', 'itemTwo']
    },
    {
      id: '12457',
      title: 'Recipe Two',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOH-eNSw0x2PnCpazactoPcdc1Lps6uB1zOMVT0V8w7hmvaXQI&s',
      ingredients: ['itemOne', 'itemTwo']
    }
  ];
  constructor() { }

  // Get All Recipe
  getAllRecipes() {
    // return this.recipes;
    return [...this.recipes];
  }

  // Get Single Recipe
  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  // Delete Single Recipe
  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }

}

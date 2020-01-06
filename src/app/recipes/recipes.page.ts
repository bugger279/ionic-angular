import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
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

  ngOnInit() {
  }

}

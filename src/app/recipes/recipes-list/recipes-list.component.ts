import { Component, OnInit } from '@angular/core';
import { RecipesModel } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: RecipesModel[] = [
    new RecipesModel('Recipe01', 'This is a test', 'https://www.dreamstime.com/stock-images-tablet-spaghetti-food-recipe-image27176674'),
    new RecipesModel('Recipe02', 'This is a test', 'https://www.dreamstime.com/stock-images-tablet-spaghetti-food-recipe-image27176674')
  ]
  item: string;
  description: string;
  imageURL: string;
  constructor() { }

  ngOnInit(): void {
  }

  public onDisplayList(): void {
    this.recipes.forEach((r) => {
      this.item = r.name,
        this.description = r.description,
        this.imageURL = r.imageURL
    });
  }

}

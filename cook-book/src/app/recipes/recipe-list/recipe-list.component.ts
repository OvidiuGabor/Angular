import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Receipe } from '../../models/recipe';

@Component({
  selector: '<app-recipe-list>',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Receipe[] = [];

  constructor(private recipesService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
  }
}

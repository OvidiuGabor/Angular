import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Receipe } from '../../models/recipe';

@Component({
  selector: '<app-recipe-list>',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Receipe[] = [];

  constructor(private recipesService: RecipeService, private router:Router, private activatedRounte: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.activatedRounte})

  }
}

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import { Receipe } from '../../models/recipe';

@Component({
  selector: '<app-recipe-list>',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Receipe[] = [];
  subscription: Subscription;

  constructor(private recipesService: RecipeService, private router:Router, private activatedRounte: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
    this.subscription = this.recipesService.recipeChanges.subscribe((recipe: Receipe[]) => {this.recipes = recipe});
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.activatedRounte})
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}

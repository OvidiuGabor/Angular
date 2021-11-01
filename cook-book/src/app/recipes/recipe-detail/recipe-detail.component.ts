import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router, Routes } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient';
import { Receipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
@Injectable()
export class RecipeDetailComponent implements OnInit {

  recipe: Receipe;
  Id:String

  constructor(private shoppingListService: ShoppingListService, private recipesServices: RecipeService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe(
      (id: Params) => { this.Id = id["id"]
      this.recipe = this.recipesServices.getRecipeById(+this.Id);
    })
    
  }


  sendtoShoppingList(){
    // this.recipe.ingredients.forEach(element => {
    //   this.shoppingListService.addIngredient(element);
    // });

    this.shoppingListService.addMultipleIngredients(this.recipe.ingredients);
  }
  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.activeRoute})
  }

  onDeleteRecipe(){
    this.recipesServices.deleteRecipe(+this.Id);
    this.router.navigate(['../'], {relativeTo: this.activeRoute})
  }

}

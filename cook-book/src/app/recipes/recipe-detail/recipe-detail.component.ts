import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { Receipe } from 'src/app/models/recipe';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Receipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }


  sendtoShoppingList(){
    // this.recipe.ingredients.forEach(element => {
    //   this.shoppingListService.addIngredient(element);
    // });

    this.shoppingListService.addMultipleIngredients(this.recipe.ingredients);
  }

}

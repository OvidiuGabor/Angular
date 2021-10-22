import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: '<app-shopping-list>',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {

  ingredient: Ingredient;

  ingredients: Ingredient[] =[]


  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredientsList();
    this.shoppingListService.newIngredientsAdded.subscribe(
      (newlist: Ingredient[]) => {this.ingredients = newlist}
    )
  }
}

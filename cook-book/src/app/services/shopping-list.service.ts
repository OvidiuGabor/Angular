
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../models/ingredient";

export class ShoppingListService{

    private ingredients: Ingredient[] = [
        new Ingredient("Flower", 1),
        new Ingredient("Carots", 10)
      ];

      newIngredientsAdded = new EventEmitter<Ingredient[]>()

      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.newIngredientsAdded.emit(this.ingredients.slice())
      }
      
      getIngredientsList(){
          return this.ingredients.slice();
      }

      addMultipleIngredients(ingredients: Ingredient[]){
          this.ingredients.push(...ingredients);
      }


}
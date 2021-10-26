import { Ingredient } from "../models/ingredient";
import { Subject } from "rxjs";


export class ShoppingListService{

    private ingredients: Ingredient[] = [
        new Ingredient("Flower", 1),
        new Ingredient("Carots", 10)
      ];

      newIngredientsAdded = new Subject<Ingredient[]>()

      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.newIngredientsAdded.next(this.ingredients.slice())
      }
      
      getIngredientsList(){
          return this.ingredients.slice();
      }

      addMultipleIngredients(ingredients: Ingredient[]){
          this.ingredients.push(...ingredients);
      }


}
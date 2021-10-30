import { Ingredient } from "../models/ingredient";
import { Subject } from "rxjs";


export class ShoppingListService{

    private ingredients: Ingredient[] = [
        new Ingredient("Flower", 1),
        new Ingredient("Carots", 10)
    ];

    newIngredientsAdded = new Subject<Ingredient[]>()
    startedEditing = new Subject<number>();

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
    getIngredient(index: number){
        var maxIndex = this.ingredients.length;
        if((index < maxIndex) || index < 0){
            return this.ingredients[index]
        }else{
            return new Ingredient("Index out of bouds", 0);
        }
    }

    updateIngredient(index: number, newIngredient:Ingredient){
        if(newIngredient){
            this.ingredients[index] = newIngredient;
            this.newIngredientsAdded.next(this.ingredients.slice());
        }
    }

    deleteIngredient(index:number){
        var maxIndex = this.ingredients.length;
        if((index < maxIndex) || index < 0){
            this.ingredients.splice(index, 1);
            this.newIngredientsAdded.next(this.ingredients);
        }else{
            return new Ingredient("Index out of bouds", 0); //return new empty object as i dont know how to throw an error yet
        }
    }



}
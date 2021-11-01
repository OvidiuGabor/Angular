import { Subject } from "rxjs";
import { Ingredient } from "../models/ingredient";
import { Receipe } from "../models/recipe";

export class RecipeService{

    private recipes: Receipe[] = [
        new Receipe("Pasta", 
        "This is a pasta recipe",
        "https://wasabiwarwick.com/wp-content/uploads/2019/12/vegetarian-pasta-best-pasta-recipes-vegetarian.jpg", 
        [new Ingredient('pasta', 1), new Ingredient('chesse', 1)]),
        new Receipe("Sushi", 
        "Sushi recipe with salmon falvour",
        "https://th.bing.com/th/id/R.3d1df1302392647c1026b23ea2b8aa74?rik=u2nIxGBXRmxckQ&pid=ImgRaw&r=0", 
        [new Ingredient('fish', 10), new Ingredient('rice', 100)])
      ];

      recipeChanges = new Subject<Receipe[]>();
    getRecipes(){
        return this.recipes.slice();
    }

    getRecipeById(id: number){
        return this.recipes[id];
    }

    addRecipe(recipe: Receipe){
        this.recipes.push(recipe);
        this.recipeChanges.next(this.recipes.slice())
    }
    updateRecipe(index: number, newRecipe: Receipe){
        this.recipes[index] = newRecipe;
        this.recipeChanges.next(this.recipes.slice())
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipeChanges.next(this.recipes.slice());
    }

}   
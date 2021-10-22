import { Component, OnInit } from "@angular/core";
import { Receipe } from "../models/recipe";
import { RecipeService } from "../services/recipe.service";

@Component({
    selector: '<app-recipes>',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.componenet.css'],
    providers: [RecipeService]
})
export class RecipesComponenet implements OnInit{

    recipe: Receipe;


    constructor(private recipeService: RecipeService){
   
    }

    ngOnInit(){
        this.recipeService.recipeSelected
        .subscribe(
            (recipe: Receipe) => {this.recipe = recipe}
            );
    }
}
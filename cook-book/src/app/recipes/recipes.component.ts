import { Component } from "@angular/core";
import { Receipe } from "../models/recipe";

@Component({
    selector: '<app-recipes>',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.componenet.css']
})
export class RecipesComponenet{

    recipe: Receipe;
    
    onReciveRecipe(ev:Receipe){
        console.log(ev)
        this.recipe = ev;
    }
}
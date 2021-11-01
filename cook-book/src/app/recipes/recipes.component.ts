import { Component, OnInit } from "@angular/core";
import { Receipe } from "../models/recipe";
import { RecipeService } from "../services/recipe.service";

@Component({
    selector: '<app-recipes>',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.componenet.css'],
    // providers: [RecipeService]
})
export class RecipesComponenet implements OnInit{

    constructor(){
   
    }

    ngOnInit(){
    }
}
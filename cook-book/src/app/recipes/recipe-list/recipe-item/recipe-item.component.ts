import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import {Receipe} from '../../../models/recipe'

@Component({
  selector: '<app-recipe-item>',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() newRecipe: Receipe;
  @Input() Index: Number;


  ngOnInit(): void {
  }

  // showDetails(element:Receipe){
  //   this.recipeService.recipeSelected.emit(this.newRecipe);
  // }

}

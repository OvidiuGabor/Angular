import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient';

@Component({
  selector: '<app-shopping-list>',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredient: Ingredient;

  ingredients: Ingredient[] = [
    new Ingredient("Flower", 1),
    new Ingredient("Carots", 10)
  ];


  constructor() { }

  ngOnInit(): void {
  }

  onReciveIngredient(el:Ingredient){
    if(el){
      this.ingredients.push(el);
    }
 
  }
}

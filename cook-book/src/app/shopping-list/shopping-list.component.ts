import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../models/ingredient';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: '<app-shopping-list>',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredient: Ingredient;
  private igChangeSub: Subscription
  ingredients: Ingredient[] =[]


  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredientsList();
    this.igChangeSub =  this.shoppingListService.newIngredientsAdded.subscribe(
      (newlist: Ingredient[]) => {this.ingredients = newlist}
    )
  }

  ngOnDestroy(){
    this.igChangeSub.unsubscribe();
  }



  onEditItem(id: number){
    this.shoppingListService.startedEditing.next(id);
  }
}

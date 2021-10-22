import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: '<app-shopping-edit>',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("nameInput", {static: true}) ingredientName: ElementRef;
  @ViewChild("amountInput", {static: true}) ingredientAmount: ElementRef;

  newIngredient: Ingredient;

  constructor(private ShoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }


  onAddNewElement(){
    //check that the inputs are not an empty string
    if(this.ingredientName.nativeElement.value != "" && this.ingredientAmount.nativeElement.value != ""){
      this.newIngredient = new Ingredient(this.ingredientName.nativeElement.value, this.ingredientAmount.nativeElement.value);
      this.ShoppingListService.addIngredient(this.newIngredient);
      
    }

  }
}

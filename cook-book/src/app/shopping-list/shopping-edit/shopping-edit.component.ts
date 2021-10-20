import { Component, OnInit, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: '<app-shopping-edit>',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("nameInput", {static: true}) ingredientName: ElementRef;
  @ViewChild("amountInput", {static: true}) ingredientAmount: ElementRef;

  newIngredient: Ingredient;

  @Output() sendIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }


  onAddNewElement(){
    //check that the inputs are not an empty string
    if(this.ingredientName.nativeElement.value != "" && this.ingredientAmount.nativeElement.value != ""){
      this.newIngredient = new Ingredient(this.ingredientName.nativeElement.value, this.ingredientAmount.nativeElement.value);
      this.sendIngredient.emit(this.newIngredient);
    }

  }
}

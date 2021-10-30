import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: '<app-shopping-edit>',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // @ViewChild("nameInput", {static: true}) ingredientName: ElementRef;
  // @ViewChild("amountInput", {static: true}) ingredientAmount: ElementRef;

  newIngredient: Ingredient;
  subscription: Subscription;
  editMode = false;
  editedNumberIndex: number;

  @ViewChild("itemForm", {static: true}) shoppingListItem: NgForm
  constructor(private ShoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.ShoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedNumberIndex = index;

        this.newIngredient = this.ShoppingListService.getIngredient(index);
        // console.log(this.newIngredient)
        this.shoppingListItem.setValue({
          name: this.newIngredient.name,
          amount: this.newIngredient.amount
        })
        
      });
  }


  onAddNewElement(itemForm:NgForm ){
    //check that the inputs are not an empty string
 
    if(itemForm.value.name != "" && itemForm.value.amount != ""){
      if(this.editMode){
        this.ShoppingListService.updateIngredient(this.editedNumberIndex, new Ingredient(itemForm.value.name, itemForm.value.amount))
      }else{
        this.newIngredient = new Ingredient(itemForm.value.name, itemForm.value.amount);
        this.ShoppingListService.addIngredient(this.newIngredient);
      }
      
    }

    console.log(itemForm.value.amount)
  }



  onDelete(){
    this.ShoppingListService.deleteIngredient(this.editedNumberIndex);
    this.editMode = false;
    this.shoppingListItem.reset();
    
  }

  onReset(){
    this.editMode = false;
    this.shoppingListItem.reset();
  }


  ngOnDestroy(){
    this.subscription.unsubscribe();
  }



}

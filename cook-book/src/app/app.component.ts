import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showRecipes: boolean = false;
  showShoppingList: boolean = false;



  onDisplayRecipe(ev: boolean){
    if(this.showRecipes == false){
        this.showShoppingList = false;
        this.showRecipes = true;
    }
  
  }
  onDisplayShoppingList(ev: boolean){
    if(this.showShoppingList == false){
      this.showShoppingList = true;
      this.showRecipes = false;
  }

  }
}

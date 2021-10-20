import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: '<app-header>',
    templateUrl: './header.component.html',
    styleUrls: ['./header.componenet.css']
})
export class HeaderComponent{

    collapsed = true;
    @Output() displayRecipes = new EventEmitter<boolean>();
    @Output() displayShoppingList = new EventEmitter<boolean>();


    showRecipes(){
        this.displayRecipes.emit(true)
    }

    showShoppingList(){
        this.displayShoppingList.emit(true)
    }
}
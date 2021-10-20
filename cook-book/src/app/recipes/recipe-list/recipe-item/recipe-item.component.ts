import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Receipe} from '../../../models/recipe'

@Component({
  selector: '<app-recipe-item>',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() newRecipe: Receipe;
  @Output() passedRecipe = new EventEmitter<Receipe>()
  constructor() { }

  ngOnInit(): void {
  }

  showDetails(element:Receipe){

    if(element != null){
      this.passedRecipe.emit(element);
      console.log("ElementFired")
    }
  }

}

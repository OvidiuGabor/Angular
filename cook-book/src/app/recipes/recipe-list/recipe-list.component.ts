import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Receipe } from '../../models/recipe';

@Component({
  selector: '<app-recipe-list>',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Receipe[] = [
    new Receipe("Pasta", "This is a pasta recipe","https://wasabiwarwick.com/wp-content/uploads/2019/12/vegetarian-pasta-best-pasta-recipes-vegetarian.jpg"),
    new Receipe("Sushi", "Sushi recipe with salmon falvour","https://th.bing.com/th/id/R.3d1df1302392647c1026b23ea2b8aa74?rik=u2nIxGBXRmxckQ&pid=ImgRaw&r=0")
  ];


  //@Input() recivedRecipe: Receipe;
@Output() sendElement = new EventEmitter<Receipe>()

  constructor() { }

  ngOnInit(): void {
  }

  recivedRecipe(el: Receipe){
    console.log('First Pass!')
    this.sendElement.emit(el)
  }
}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Receipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipesService: RecipeService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        //console.log(this.editMode);
        this.initForm();

      }
    );



  }


  private initForm(){
    let recipeName = "";
    let recipeImagePath = "";
    let recipeDescription = "";
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
 
      const recipe = this.recipesService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      "name": new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    })
  }
  onSubmit(){
    console.log(this.recipeForm);
    const newRecipe = new Receipe(this.recipeForm.value["name"], this.recipeForm.value["description"], this.recipeForm.value["imagePath"],this.recipeForm.value["ingredients"])
    if(this.editMode){
      this.recipesService.updateRecipe(this.id, this.recipeForm.value)
    }else{
      this.recipesService.addRecipe(this.recipeForm.value);
    }
    this.router.navigate(["../"], {relativeTo: this.route})
  }

  getControls(){
    return (<FormArray>this.recipeForm.get("ingredients")).controls;
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get("ingredients")).push(
      new FormGroup({
        "name": new FormControl(null, Validators.required),
        "amount": new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

  onCancel(){
    this.recipeForm.reset();
    this.router.navigate(["../../"], {relativeTo: this.route})
  }

  onDeleteIngredient(index: number){
    (<FormArray>this.recipeForm.get("ingredients")).removeAt(index)
  }

}

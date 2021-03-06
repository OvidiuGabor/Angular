import { Ingredient } from "./ingredient";

export class Receipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];
    public id: number;

    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}
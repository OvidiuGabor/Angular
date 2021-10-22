import { Injectable } from "@angular/core";
import { CounterServices } from "./counter.services";

@Injectable()
export class UsersServices{

    activeUsers: string[] = ['Max', "Anna"];
    inactiveUsers: string[] = ["Chris", "Manu"];


    constructor(private counter: CounterServices){

    }

    addToActiveUsers(id: number){
        this.activeUsers.push(this.inactiveUsers[id])
        this.inactiveUsers.splice(id,1);
        this.counter.increaseCounter();
       // console.log(this.counter.counter)
        
    }

    addToInactiveUsers(id:number){
       

        this.inactiveUsers.push(this.activeUsers[id])
        this.activeUsers.splice(id,1);
        this.counter.increaseCounter();
    }


}
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { UsersServices } from "../services/users.services";


@Component({
    selector: 'app-inactive-users',
    templateUrl: './inactive-users.component.html',
    styleUrls: ['./inactive-users.component.css']
    
})
export class InactiveUsersComponent implements OnInit{

   @Input() users: string[] = [];
   //@Output() inactiveUser = new EventEmitter<number>()

    constructor(private newUsers: UsersServices){
        this.users = newUsers.inactiveUsers;
    }
    
    ngOnInit(){

    }

    onSetToActive(id: number){
        //this.inactiveUser.emit(id);
        this.newUsers.addToActiveUsers(id);
    }

}
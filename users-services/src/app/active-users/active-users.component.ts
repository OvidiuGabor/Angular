import { Component, OnInit } from '@angular/core';
import { UsersServices } from '../services/users.services';


@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

users: string[] = [];
  constructor(private newUsers: UsersServices) {this.users = newUsers.activeUsers }

  ngOnInit(): void {
  }


  onSetToInactive(id: number){
    // this.activeUserClick.emit(id);
    this.newUsers.addToInactiveUsers(id);
  }
}

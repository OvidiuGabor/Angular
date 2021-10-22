import { Component } from '@angular/core';
import { CounterServices } from './services/counter.services';
import { UsersServices } from './services/users.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  

})
export class AppComponent {
  title = 'users-services';

  counter: number;

  constructor(private countAction: CounterServices){
    this.counter = countAction.counter;
    console.log(countAction.counter)
  }

  // onActiveUserClick(id: number){
  //   this.inactiveUsers.push(this.activeUsers[id])
  //   this.activeUsers.splice(id,1);
  // }

  // onInactiveUserClick(id: number){
  //   this.activeUsers.push(this.inactiveUsers[id])
  //   this.inactiveUsers.splice(id,1);
  // }


}

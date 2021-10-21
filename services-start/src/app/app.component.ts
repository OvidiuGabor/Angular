import { Component, OnInit } from '@angular/core';
import { AccountsService } from './shared/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'services-start';

  accounts: {name:string, status: string}[] = []

  constructor(private accountsService: AccountsService){}
 
ngOnInit(){
  this.accounts = this.accountsService.accounts
}


  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'observable-start';
  userActivate = false;
  private activateSub: Subscription
  constructor(private userService:UserService){}


  ngOnInit(){
    this.activateSub =  this.userService.activatedEmitter.subscribe((activate:boolean) => {this.userActivate = activate})
  }

  ngOnDestroy(){
    this.activateSub.unsubscribe();
  }

}

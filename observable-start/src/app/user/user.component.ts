import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: string;

  constructor(private activeRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {

    // this.id = this.activeRoute.snapshot.params['id']

    this.activeRoute.params.subscribe(
      (params:Params) => {
        this.id = params['id']
      }
    )

  }


  onActivate(){
    this.userService.activatedEmitter.next(true);
  }
}

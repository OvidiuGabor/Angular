import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {

    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    )
    // const id = +this.route.snapshot.params['Id'] //always a string '1'
    // console.log(this.route.snapshot.params['Id'])
    // //this.server = this.serversService.getServer(1);
    // this.server = this.serversService.getServer(id);
    // console.log(this.server)
    // this.route.params.subscribe(
    //   (params:Params) => {
    //     this.server = this.serversService.getServer(+params['Id'])
    //   }
    // )



  }


  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'}) //use merge if you want to combine them with new params, otherwise it will be overwritten by the new params 
  }



}

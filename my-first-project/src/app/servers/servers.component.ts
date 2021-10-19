
import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styles: [`
        .p-color {
            color: white;
        }
    `]


})
export class ServersComponent implements OnInit{
    allowNewServer = false;
    serverCreationStatus = "No server has been created!";
    serverName = "TestServer";
    serverCreated = false;
    username = "";
    btnStatus = false;
    servers = ['TestServer', 'TestServer 2']

    ////////////////////////////////Assignment2/////////////////
    isTextVisible = true;
    log: Date[]  = [];

    toggleText(){
            if(this.isTextVisible == true){
                this.isTextVisible = false
            }else{
                this.isTextVisible = true
            }

            this.log.push(new Date());
    }

    constructor(){
        this.isEmptyString();
        // if(this.username.length > 1){
        //     this.btnStatus = true;
        // }
        setTimeout(() =>{
            this.allowNewServer = true;
        }, 2000) 
    }

    ngOnInit(){

    }


    onCreateServer(){   
        this.serverCreationStatus = "Server was created! Server name is " +  this.serverName;
        this.serverCreated = true;
        this.servers.push(this.serverName);
        }

    onUpdateServerName(event: any){
         //console.log(event);
         this.serverName = (<HTMLInputElement>event.target).value;
    }

    isEmptyString(){
        if(this.username.length > 1){
            this.btnStatus = true;
        }
    }

    onBtnClick(){
        this.username = "";
        this.btnStatus = false;
    }
    onInput(event: any){

        if(event.target.value.length > 0){
            this.btnStatus = true;
        }
    }
}
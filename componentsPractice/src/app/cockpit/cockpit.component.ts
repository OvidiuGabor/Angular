import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, OnChanges } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{serverName: string, serverContent:string}>();;

  //newServerName = "";
  //newServerContent = "";
@ViewChild("serverContentInput", {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  

  onAddServer(inputElement: HTMLInputElement){
    this.serverCreated.emit({serverName: inputElement.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBluePrint(inputElement: HTMLInputElement){
    this.blueprintCreated.emit({serverName: inputElement.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  changeMe(){
    
  }

}

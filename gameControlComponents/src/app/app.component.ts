import { Component, ContentChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gameControlComponents';
  numberlist: number[] = [];
  counter:number;

  @ViewChild("eventElements", {static:true}) elements;

  onCounterStarted(event: {counter: number}){
    this.counter = event.counter;
    this.numberlist.push(this.counter);

  }

  onDataCleared(ev:{clear: boolean}){
   this.numberlist.splice(0, this.numberlist.length);
  }


}

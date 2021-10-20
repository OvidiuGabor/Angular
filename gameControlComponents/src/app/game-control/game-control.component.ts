import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  count = 0;
  gameStarted = false;
  intervalfunction;
  @Output("counterStarted") counterStarted = new EventEmitter<{counter: number}>();
  @Output ("clearData") clear = new EventEmitter<{clear: boolean}>();


  constructor() { }

  ngOnInit(): void {
  }

  clearWindow(){
    this.clear.emit({clear: true})
  }

  startGame(){
    if(this.gameStarted ==false){
      this.startInterval();
        this.gameStarted = true;  
    }

  }
  stopGame(){

    if(this.gameStarted == true){
      clearInterval(this.intervalfunction)
      this.gameStarted = false;
    }
  }
 
  startInterval(){
    this.intervalfunction = setInterval(()=>{
      this.count++; 
      // console.log(this.count)
      this.counterStarted.emit({counter: this.count});
    } , 1000)
  }
}

import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
  
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked{

  @Input("srvElement") element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild("heading", {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) contentP: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit Starts here!")
    console.log("Text content: " + this.header.nativeElement.textContent)
    console.log("Text content of paragraph : " + this.contentP.nativeElement.textContent)
  }
  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges Starts here!")
    console.log(changes)
  }

ngDoCheck(){
  console.log("ngDoCheck called!")
}
ngAfterContentInit(){
  console.log("ngAfterContentInit Called")
  console.log("Text content of paragraph : " + this.contentP.nativeElement.textContent)

}
ngAfterContentChecked(){
  console.log("")
}
}

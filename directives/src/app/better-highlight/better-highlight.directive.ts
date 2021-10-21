import { Directive, OnInit, Renderer2,ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

 
  constructor(private elRef:ElementRef, private renderer: Renderer2) { }
    @Input() defaultColor:string = 'transparent' //custom values
    @Input() highlightColor:string = 'blue'

    @HostBinding('style.backgroundColor') backgroundColor: string;

  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.backgroundColor = this.defaultColor
  }

  @HostListener('mouseenter') mouseOver(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.backgroundColor = this.highlightColor;

  }
  @HostListener('mouseleave') mouseLeave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.backgroundColor = this.defaultColor;

  }
}

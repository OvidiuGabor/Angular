import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  classToAdd = 'open';
  isAdded:boolean = false;

  constructor(private dropdownEl:ElementRef) { }




  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event){
    this.isOpen = this.dropdownEl.nativeElement.contains(event.target)? !this.isOpen : false;
  }

// @HostListener('click') whenClicked(){

//   if(!this.dropdownEl.nativeElement.classList.contains(this.classToAdd)){
//       this.dropdownEl.nativeElement.classList.add(this.classToAdd)

//       //console.log(true)
//   }else{
//     this.dropdownEl.nativeElement.classList.remove(this.classToAdd)
//     //console.log(false)

//   }

//   //console.log(this.dropdownEl)
// } 

}

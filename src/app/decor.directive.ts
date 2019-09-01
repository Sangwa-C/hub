import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDecor]'
})
export class DecorDirective {

  constructor(private elem:ElementRef) {
    // this.elem.nativeElement.style.background = '#181717';
    // this.elem.nativeElement.style.border-radius = '10px';
   }

   private textDeco(action:string){
    this.elem.nativeElement.style.background = '#181717';
    // this.elem.nativeElement.style.background = 'none';
   }

   @HostListener("mousemove") onmouseover(){
    this.textDeco("background")
  }

  // @HostListener("mousemove") onmouseleave(){
  //   this.textDeco("none")
  // }
}

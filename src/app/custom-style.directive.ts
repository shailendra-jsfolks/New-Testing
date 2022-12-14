import { Directive, ElementRef } from '@angular/core';
import { Test5Component } from './test5/test5.component';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(
    // private el:ElementRef, 
    private data: Test5Component) {
    //  el.nativeElement.style.color ="red"
    //  console.log(el.nativeElement);
    //  el.nativeElement.textContent = "custom diractive"

    this.listdata();
      
   
     
     
   }

  listdata() {

    console.log(this.data.name);

    this.data.name = "custom diractive";
    
    // const dm = this.el.nativeElement as HTMLElement;
    
      // dm.addEventListener("click", () => {
        // alert("clicked")
      // })
     

   }

}

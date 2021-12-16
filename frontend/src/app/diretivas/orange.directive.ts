import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appOrange]'
})
export class OrangeDirective {

  constructor(private element:ElementRef) {
    element.nativeElement.style.color = '#CD6600'
   }

}

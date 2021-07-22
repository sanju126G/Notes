import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(ef:ElementRef) {
    ef.nativeElement.style.color = 'red';
   }

}

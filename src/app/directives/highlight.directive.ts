import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  //Las directivas nos ayudan a manipular un elemento html desde el DOM por ejemplo
  //*ngIf ,*ngFor ,etc. manipuladores de de elementos son directivas
  //entonces por lo tanto podemos escuchar eventos desde el elemento que esta declarando esta directiva
  //esto se da con ayuda del decorador @HostListener
  //importamos e inyectamos elementRef que es un servicio brindado por angular

  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.backgroundColor = 'red';
    this.element.nativeElement.style.padding = '10px';
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.style.backgroundColor = '';
  }
  constructor(
    private element:ElementRef
    ) {
     /*  this.element.nativeElement.style.backgroundColor = 'red';
      this.element.nativeElement.style.padding = '10px'; */
     }

}

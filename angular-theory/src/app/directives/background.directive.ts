import {Directive, ElementRef, HostListener, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'grey');
    // this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
  }

}

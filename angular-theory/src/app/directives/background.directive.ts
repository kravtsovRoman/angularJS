import {Directive, ElementRef, HostListener, OnInit, Renderer2, Input, HostBinding} from "@angular/core";

@Directive({
  selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit {

  @Input() hoverColor: string = 'green';
  @Input() defaultColor: string = 'transparent';

  @HostBinding('style.backgroundColor') background: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'grey');
    // this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    this.background = this.hoverColor
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    this.background = this.defaultColor;
  }

}

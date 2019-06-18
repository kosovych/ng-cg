import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBassicHightlight2]'
})
export class BassicHightlight2Directive implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() hightlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  
  constructor(
    private renderer: Renderer2,
    private elRef: ElementRef,
    ) {}
    
    ngOnInit() {
      this.backgroundColor = this.defaultColor
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    }

    @HostListener('mouseenter') mouseover(event: Event) {
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
      this.backgroundColor = this.hightlightColor;
    }

    @HostListener('mouseleave') mouseleave(event: Event) {
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
      this.backgroundColor = this.defaultColor;
    }

}

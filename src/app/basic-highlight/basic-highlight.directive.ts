import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[basicHighlight]',
})

export class BasicHightlightDirective implements OnInit {
  constructor(
    private elRef: ElementRef
  ) {

  }

  ngOnInit() {
    this.elRef.nativeElement.style.backgroundColor = 'green';
  }
}
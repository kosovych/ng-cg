import { Component, OnInit, Input, EventEmitter, ViewEncapsulation, OnChanges, SimpleChange, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit,
AfterViewChecked, OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('paragraph') paragraph;

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.header.nativeElement.textContent);
    console.log('<p>  --> ', this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('AfterViewInit');
    console.log(this.header.nativeElement.textContent);
    console.log('<p>  --> ', this.paragraph.nativeElement.textContent);

  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy () {
    console.log('ngOnDestroy');
  }

}

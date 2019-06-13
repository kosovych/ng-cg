import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer(input) {
    this.serverCreated.emit({
      serverName: input.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(input) {
    this.blueprintCreated.emit({
      serverName: input.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

}

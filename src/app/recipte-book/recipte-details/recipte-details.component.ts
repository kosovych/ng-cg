import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipte-details',
  templateUrl: './recipte-details.component.html',
  styleUrls: ['./recipte-details.component.scss']
})
export class RecipteDetailsComponent implements OnInit {
  @Input() recipe;

  constructor() { }

  ngOnInit() {
  }

}

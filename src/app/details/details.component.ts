import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public isOpenDetals = false;
  public clickCach = [];

  constructor() {
  }

  ngOnInit() {
  }

  openDetails() {
    this.isOpenDetals = !this.isOpenDetals;
  }

  addClickCach() {
    this.clickCach.push(Date.now());
    console.log(this.clickCach);
  }

}

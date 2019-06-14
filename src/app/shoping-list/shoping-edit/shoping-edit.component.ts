import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.scss']
})
export class ShopingEditComponent implements OnInit {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;
  @Output() onAddIngridient = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  addIngridient() {
    this.onAddIngridient.emit({
      name: this.name.nativeElement.value,
      amount: this.amount.nativeElement.value,
    });
    this.name.nativeElement.value = '';
    this.amount.nativeElement.value = '';
  }

}

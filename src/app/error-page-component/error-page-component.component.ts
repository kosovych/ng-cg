import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page-component',
  templateUrl: './error-page-component.component.html',
  styleUrls: ['./error-page-component.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string; 

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.errorMessage = this.route.snapshot.data.message;
    console.log(this.route.snapshot.data);
  }
}

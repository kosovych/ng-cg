import { Component, OnInit } from '@angular/core';
import { CounerService } from './shared/services/couner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counter: number;

  constructor(
    private counerService: CounerService,
  ) {}

  ngOnInit() {
  }
}

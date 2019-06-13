import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-cg';

  numbers = [];

  GameRunHundler(event) {
    console.log('GameRunHundler ->', event);
    this.numbers.push(event);
  }
}

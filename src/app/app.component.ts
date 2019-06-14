import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-cg';
  route = '/recipes'

  changeRoute(route) {
    console.log(route);
    this.route = route;
  }
}

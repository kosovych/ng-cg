import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  value = 5;
  
  constructor() {
    setInterval(() => {
      let data = Date.now();
      console.log(data);
      if(data % 2 === 0) return this.value = 5;
      if(data % 3 === 0) return this.value = 10;
      if(data % 5 === 0) return this.value = 15;
    }, 1000);
  }
}

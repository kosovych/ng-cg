import { Injectable, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CounerService implements OnInit {
  counter: number = 0;

  constructor(
    private userService: UserService
  ) {
    
  }

  ngOnInit() {
    this.userService.statusChanged.subscribe( () => {
      this.counter++;
      console.log(this.counter);
    })
  }
}

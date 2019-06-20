import { Injectable, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CounerService {
  counterActive: number = 0;
  counterInActive: number = 0;

  constructor(
    private userService: UserService
  ) {
    this.userService.statusChanged.subscribe( (val) => {
      switch (val) {
        case 'toInactive':
          this.counterInActive++;
          console.log(val, this.counterInActive);
          break;

          case 'toActive':
          this.counterActive++
          console.log(val, this.counterActive);
          break;
      
        default:
          break;
      }
    })
  }
}

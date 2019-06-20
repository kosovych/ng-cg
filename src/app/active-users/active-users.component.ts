import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  @Output() userSetToInactive = new EventEmitter<number>();
  public users: string[] = [];

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
  }
}

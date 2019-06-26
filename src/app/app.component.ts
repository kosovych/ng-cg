import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  eventData: string;
  private subs: Subscription;
  constructor(
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.subs = this.userService.userActivated.subscribe((data: string) => this.eventData = data);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }


}

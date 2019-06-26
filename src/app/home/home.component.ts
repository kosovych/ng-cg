import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  interval,
  Subscription,
  Observable
} from 'rxjs';
import {
  map,
  filter
} from 'rxjs/operators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstSub: Subscription;

  constructor(
    private userS: UserService,
  ) {}

  ngOnInit() {
    // this.firstSub = interval(500).subscribe(
    //   (c) => {console.log(c)}
    // )

    const customObs = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count > 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Ooops, some error'));
        }
        count++;
      }, 500);
    });

    this.firstSub = customObs.pipe(
      filter( (data: number) => data % 2 === 0 ),
      map((data: number) => `Round: ${data + 1}`)).subscribe(
        (c) => console.log(c), // next
        (error) => console.log(error), // error
        () => console.log('Comleted!'), // comleted
    );
  }

  ngOnDestroy() {
    this.firstSub.unsubscribe();
  }
}

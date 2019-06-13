import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  @Output() onGameRun: EventEmitter<any> = new EventEmitter();
  interval: any;
  counter = 0;

  constructor() {}

  ngOnInit() {}

  startGame() {
    this.interval = setInterval(() => {
      this.counter++;
      this.onGameRun.emit(this.counter);
      console.log('startGame ->' ,this.counter);
    }, 1000);
  }
  stopGame() {
    clearInterval(this.interval);
  }

}

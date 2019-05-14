import { Component } from '@angular/core';



@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverID: number = 123;
  serverStatus: string = 'offline';

  getStatus() {
    return this.serverStatus;
  }
}
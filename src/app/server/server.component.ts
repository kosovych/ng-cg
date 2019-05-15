import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['server.component.scss']
})
export class ServerComponent {
  serverID: number = 123;
  serverStatus: string;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    setInterval(() => {
      this.serverStatus = this.serverStatus === 'online' ? 'offline' : 'online';
    }, Math.random() * 3000);
  }

  getStatus() {
    return this.serverStatus;
  }

  getColot() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
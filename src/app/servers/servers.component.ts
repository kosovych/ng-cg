import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  public isDisabled :boolean = true;
  public serverCreatedStatus :string = 'No server was created';
  public serverName:string = 'Placeholder';
  public isServerCreated = false;

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreatedStatus = `Server was created! ${this.serverName}`;
    this.isServerCreated = true;
  }

  onServeNameChange(event) {
    this.serverName = event.target.value;
  }

}

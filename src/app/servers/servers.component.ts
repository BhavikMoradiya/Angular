import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers', to make attribute components
  //selector:'[app-servers]', for elements components
  selector:'.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServer = false;
  serverCreated = "No server was created..!!";
  constructor() { 
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onServerCreated(){
    this.serverCreated = "Server created..!!";
  }

}

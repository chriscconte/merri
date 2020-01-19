import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-console',
  templateUrl: './app.component.adminConsole.html',
})

export class AdminConsole implements OnInit {
  links = {};

  constructor() { }

  ngOnInit() {
    for (let i in localStorage) {
      if (localStorage.hasOwnProperty(i)) {
        this.links[i] = localStorage[i];
      }
    }
  }
}

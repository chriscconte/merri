import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.generator.html',
})

export class Generator {
  shortened = '';
  url = '';
  hash = '';

  generate() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 6; i++) {
      this.hash += chars[Math.floor(Math.random() * chars.length)];
    }
  }

  store() {
    localStorage.setItem(this.hash, this.url);

    this.shortened = 'localhost:4200/' + this.hash;
  }
}

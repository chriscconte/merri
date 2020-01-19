import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: [
    '../../node_modules/bulma/css/bulma.css',
  ]
})
export class AppComponent  { name = 'Angular'; }

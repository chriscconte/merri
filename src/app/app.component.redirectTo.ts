import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'redirect-to',
  templateUrl: './app.component.redirectTo.html',
})

export class RedirectTo implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      if (localStorage.hasOwnProperty(params.get('hash'))) {
        let url = localStorage.getItem(params.get('hash'));

        window.location.replace(url);
      }

      this.router.navigate(['/404']);
    });
  }

}

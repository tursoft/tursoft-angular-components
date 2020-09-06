import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageTitle = '';
  pagePath = '';
  isHomePage = false;

  constructor(router: Router, route: ActivatedRoute) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const data = route.root.firstChild.snapshot.data;
        this.pageTitle = data.title;
        this.isHomePage = (data.type === 'homepage');
      }
    });
  }
}

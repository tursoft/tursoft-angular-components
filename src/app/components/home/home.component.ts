import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoute } from 'src/app/app-routing.module';
import { title } from 'process';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  components: ComponentInfo[] = [];
  constructor(router: Router) {
    const routes = (router.config as AppRoute[]).filter(r => r.data != null && r.data.type == 'component');
    this.components = routes.map<ComponentInfo>(t => {
                return  { path: t.path, title: t.data.title, summary: t.data.summary };
              });
  }

  ngOnInit() {
  }
}

interface ComponentInfo {
  path: string;
  title: string;
  summary: string;
}

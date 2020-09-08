import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { TursoftCollapsibleComponent } from './components/tursoft-collapsible/tursoft-collapsible.component';
import { NgxPhotoCardComponent } from './components/ngx-photo-card/ngx-photo-card.component';
import { HomeComponent } from './components/home/home.component';
import { NgxTextExpanderComponent } from './components/ngx-text-expander/ngx-text-expander.component';

export interface RouteData {
  type?: 'homepage' | 'component' | null;
  title: string;
  summary?: string;
}

export interface AppRoute extends Route {
  data?: RouteData;
}

const routes: AppRoute[] = [
  { path: '', component: HomeComponent,
      data: { type: 'homepage', title: 'Home' }},

  { path: 'ngx-photo-card', component: NgxPhotoCardComponent,
      data: { type: 'component', title: 'ngx-photo-card' , summary: 'Simple photo card component' }},

  { path: 'ngx-text-expander', component: NgxTextExpanderComponent,
      data: { type: 'component', title: 'ngx-text-expander' , summary: 'Simple text expander component' }},

  { path: 'tursoft-collapsible', component: TursoftCollapsibleComponent,
      data: { type: 'component', title: 'tursoft-collapsible', summary: 'Simple collapsible component' }},

  { path: '*', redirectTo: '' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

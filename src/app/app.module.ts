import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';

import { NgxPhotoCardModule } from 'projects/ngx-photo-card/src/lib/ngx-photo-card.module';
import { NgxTextExpanderModule } from 'projects/ngx-text-expander/src/lib/ngx-text-expander.module';
import { TursoftCollapsibleModule } from 'projects/tursoft-collapsible/src/public-api';

import { NgxPhotoCardComponent } from './components/ngx-photo-card/ngx-photo-card.component';
import { NgxTextExpanderComponent } from './components/ngx-text-expander/ngx-text-expander.component';
import { TursoftCollapsibleComponent } from './components/tursoft-collapsible/tursoft-collapsible.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,

    NgxTextExpanderComponent,
    NgxPhotoCardComponent,
    TursoftCollapsibleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    NgxTextExpanderModule,
    NgxPhotoCardModule,
    TursoftCollapsibleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

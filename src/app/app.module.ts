import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPhotoCardModule } from 'projects/ngx-photo-card/src/lib/ngx-photo-card.module';
import { TursoftCollapsibleModule } from 'projects/tursoft-collapsible/src/public-api';
import { NgxPhotoCardComponent } from './components/ngx-photo-card/ngx-photo-card.component';
import { TursoftCollapsibleComponent } from './components/tursoft-collapsible/tursoft-collapsible.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxPhotoCardComponent,
    TursoftCollapsibleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPhotoCardModule,
    TursoftCollapsibleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

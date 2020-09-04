import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPhotoCardModule } from 'projects/ngx-photo-card/src/lib/ngx-photo-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPhotoCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

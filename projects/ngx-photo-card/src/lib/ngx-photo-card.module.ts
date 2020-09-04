import { NgModule } from '@angular/core';
import { NgxPhotoCardComponent } from './components/ngx-photo-card.component/ngx-photo-card.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [NgxPhotoCardComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxPhotoCardComponent]
})
export class NgxPhotoCardModule { }

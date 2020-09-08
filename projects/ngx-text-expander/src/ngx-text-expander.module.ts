import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTextExpanderComponent } from './components/ngx-text-expander/ngx-text-expander.component';



@NgModule({
  declarations: [NgxTextExpanderComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxTextExpanderComponent]
})
export class NgxTextExpanderModule { }

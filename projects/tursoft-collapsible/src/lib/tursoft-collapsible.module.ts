import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TursoftCollapsibleComponent } from './components/tursoft-collapsible/tursoft-collapsible.component';



@NgModule({
  declarations: [TursoftCollapsibleComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [TursoftCollapsibleComponent]
})
export class TursoftCollapsibleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TursoftCollapsibleComponent } from './components/tursoft-collapsible/tursoft-collapsible.component';



@NgModule({
  declarations: [TursoftCollapsibleComponent],
  imports: [
    CommonModule
  ],
  exports: [TursoftCollapsibleComponent]
})
export class TursoftCollapsibleModule { }

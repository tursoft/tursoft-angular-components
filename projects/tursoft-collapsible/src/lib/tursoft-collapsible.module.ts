import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TursoftCollapsibleComponent } from './components/tursoft-collapsible/tursoft-collapsible.component';
import { TursoftComponentsCommonModule } from 'projects/tursoft-components-common/src/public-api';



@NgModule({
  declarations: [TursoftCollapsibleComponent],
  imports: [
    CommonModule,
    TursoftComponentsCommonModule
  ],
  exports: [TursoftCollapsibleComponent]
})
export class TursoftCollapsibleModule { }

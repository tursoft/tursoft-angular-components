import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TursoftBaseComponentComponent } from '../tursoft-base-component/tursoft-base-component.component';
import { fdatasync } from 'fs';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'tursoft-collapsible',
  templateUrl: './tursoft-collapsible.component.html',
  styleUrls: ['./tursoft-collapsible.component.scss'],
  animations: [
    trigger('expandCollapse', [
      // ...
      state('expanded', style({
        display: 'block',
        // opacity: 1,
        height: '*',
        overflow: 'hidden'
      })),
      state('collapsed', style({
        display: 'none',
        // opacity: 0,
        height: '0px',
        overflow: 'hidden'
      })),
      transition('expanded <=> collapsed', animate(500)),
    ]),
  ],
})
export class TursoftCollapsibleComponent extends TursoftBaseComponentComponent implements OnInit {

  // @Output() public headerChange = new EventEmitter<string>();
  // get header(): string { return this.getPropertyValue('header', 'Panel1'); }
  // @Input() set header(val: string) { this.setPropertyValue('header', val, this.headerChange); }

  @Output() public isExpandedChange = new EventEmitter<boolean>();
  get isExpanded(): boolean { return this.getPropertyValue('isExpanded', false); }
  @Input() set isExpanded(val: boolean) { this.setPropertyValue('isExpanded', val, this.isExpandedChange); }

  constructor() {
    super();
  }

  ngOnInit() {
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

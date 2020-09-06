import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TursoftBaseComponentComponent } from '../tursoft-base-component/tursoft-base-component.component';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'tursoft-collapsible',
  templateUrl: './tursoft-collapsible.component.html',
  styleUrls: ['./tursoft-collapsible.component.scss']
})
export class TursoftCollapsibleComponent extends TursoftBaseComponentComponent implements OnInit {

  @Output() public isExpandedChange = new EventEmitter<boolean>();
  get isExpanded(): boolean { return this.getPropertyValue('isExpanded', false); }
  @Input() set isExpanded(val: boolean) { this.setPropertyValue('isExpanded', val, this.isExpandedChange); }

  @Output() public hideIconChange = new EventEmitter<boolean>();
  get hideIcon(): boolean { return this.getPropertyValue('hideIcon', false); }
  @Input('hide-toggle-icon') set hideIcon(val: boolean) { this.setPropertyValue('hideIcon', val, this.hideIconChange); }

  constructor() {
    super();
  }

  ngOnInit() {
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

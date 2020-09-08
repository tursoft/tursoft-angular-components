import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TursoftBaseComponentComponent } from '../tursoft-base-component/tursoft-base-component.component';
// tslint:disable-next-line: max-line-length

@Component({
  selector: 'tursoft-collapsible',
  templateUrl: './tursoft-collapsible.component.html',
  styleUrls: ['./tursoft-collapsible.component.scss']
})
export class TursoftCollapsibleComponent extends TursoftBaseComponentComponent implements OnInit {

  @Output() public expandedChange = new EventEmitter<boolean>();
  get expanded(): boolean { return this.getPropertyValue('expanded', false); }
  @Input() set expanded(val: boolean) { this.setPropertyValue('expanded', val, this.expandedChange); }

  @Output() public hideIconChange = new EventEmitter<boolean>();
  get hideIcon(): boolean { return this.getPropertyValue('hideIcon', false); }
  @Input('hide-toggle-icon') set hideIcon(val: boolean) { this.setPropertyValue('hideIcon', val, this.hideIconChange); }

  constructor() {
    super();
  }

  ngOnInit() {
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'ngx-text-expander',
  templateUrl: './ngx-text-expander.component.html',
  styleUrls: ['./ngx-text-expander.component.scss']
})
export class NgxTextExpanderComponent implements OnInit {

  @Output() public maxCountChange = new EventEmitter<number>();
  private _maxCount = 0;
  get maxCount(): number { return this._maxCount; }
  @Input('max-count') set maxCount(val: number) {
    this._maxCount = val;
    this.maxCountChange.emit(this._maxCount);
  }

  @Output() public textChange = new EventEmitter<string>();
  private _text = '';
  get text(): string { return this._text; }
  @Input() set text(val: string) {
    this._text = val;
    this.textChange.emit(this._text);
  }

  @Output() public lessTextChange = new EventEmitter<string>();
  private _lessText = '';
  get lessText(): string { return this._lessText; }
  @Input('less-text') set lessText(val: string) {
    this._lessText = val;
    this.lessTextChange.emit(this._lessText);
  }

  @Output() public moreTextChange = new EventEmitter<string>();
  private _moreText = '';
  get moreText(): string { return this._moreText; }
  @Input('more-text') set moreText(val: string) {
    this._moreText = val;
    this.moreTextChange.emit(this._moreText);
  }

  @Output() public showEllipseChange = new EventEmitter<boolean>();
  private _showEllipse = true;
  get showEllipse(): boolean { return this._showEllipse; }
  @Input('show-ellipse') set showEllipse(val: boolean) {
    this._showEllipse = val;
    this.showEllipseChange.emit(this._showEllipse);
  }

  constructor() {
  }

  ngOnInit() {
  }
}


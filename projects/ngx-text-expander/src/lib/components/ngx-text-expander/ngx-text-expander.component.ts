import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'ngx-text-expander',
  templateUrl: './ngx-text-expander.component.html',
  styleUrls: ['./ngx-text-expander.component.scss']
})
export class NgxTextExpanderComponent implements OnInit {

  @Output() public maxCharCountChange = new EventEmitter<number>();
  private _maxCharCount = 0;
  get maxCharCount(): number { return this._maxCharCount; }
  @Input('max-char-count') set maxCharCount(val: number) {
    this._maxCharCount = val;
    this.updateView();
    this.maxCharCountChange.emit(this._maxCharCount);
  }

  @Output() public maxWordCountChange = new EventEmitter<number>();
  private _maxWordCount = 0;
  get maxWordCount(): number { return this._maxWordCount; }
  @Input('max-word-count') set maxWordCount(val: number) {
    this._maxWordCount = val;
    this.updateView();
    this.maxWordCountChange.emit(this._maxWordCount);
  }

  @Output() public textChange = new EventEmitter<string>();
  private _text = '';
  get text(): string { return this._text; }
  @Input() set text(val: string) {
    this._text = val;
    this.updateView();
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

  @Output() public expandedChange = new EventEmitter<boolean>();
  private _expanded = false;
  get expanded(): boolean { return this._expanded; }
  @Input('expanded') set expanded(val: boolean) {
    this._expanded = val;
    this.updateView();
    this.expandedChange.emit(this._expanded);
  }


  @Output() public visibleTextChange = new EventEmitter<string>();
  private _visibleText = '';
  get visibleText(): string { return this._visibleText; }
  set visibleText(val: string) {
    this._visibleText = val;
    this.visibleTextChange.emit(this._visibleText);
  }

  constructor() {
  }

  updateView() {
    let visibleText = this.text;
    if (!this.expanded) {
      if (this.maxCharCount > 0) {
        visibleText = this.getVisibleTextByCharCount(this.text, this.maxCharCount);
      } else if (this.maxWordCount > 0) {
        visibleText = this.getVisibleTextByWordCount(this.text, this.maxWordCount);
      }
    }

    this.visibleText = visibleText;
  }

  getVisibleTextByCharCount(text: string, charCount: number): string {
    if (charCount <= 0 || text == null || text === undefined || text.length <= 0) {
      return text;
    }

    let result = text;
    if (text.length > charCount) {
      result = text.substr(0, charCount);
    }
    return result;
  }

  getVisibleTextByWordCount(text: string, wordCount: number): string {
    if (wordCount <= 0 || text == null || text === undefined || text.length <= 0) {
      return text;
    }

    let endingPosition = 0;
    let currentWordCount = 0;

    let prevCh = '';
    let i = 0;
    for (const ch of text) {
      if (ch === ' ') {
        if (prevCh !== ' ') {
          currentWordCount += 1;
          endingPosition = i;

          if (currentWordCount == wordCount) {
            break;
          }
        }
      }

      prevCh = ch;
      i += 1;
    }

    if (endingPosition == 0) {
      endingPosition = text.length;
    }

    const result = text.substr(0, endingPosition);
    return result;
  }

  setExpanded(isExpanded: boolean) {
    this.expanded = isExpanded;
  }

  ngOnInit() {
  }
}


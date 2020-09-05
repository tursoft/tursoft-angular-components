import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PhotoInfo } from '../../models/photoinfo';
import { PhotoCardOptions } from '../../models/options';

@Component({
  selector: 'NgxPc-NgxPhotoCard',
  templateUrl: './ngx-photo-card.component.html',
  styleUrls: ['./ngx-photo-card.component.scss']
})
export class NgxPhotoCardComponent implements OnInit {

  private _photoCount = 0;
  get photoCount(): number { return this._photoCount; }
  set photoCount(val: number) { this._photoCount = val; }

  @Output() public selectedPhotoIndexChange = new EventEmitter<number>();
  private _selectedPhotoIndex = 0;
  get selectedPhotoIndex(): number { return this._selectedPhotoIndex; }
  @Input() set selectedPhotoIndex(val: number) {
    this._selectedPhotoIndex = val;
    this.refreshView();
    this.selectedPhotoIndexChange.emit(this._selectedPhotoIndex);
  }

  @Output() public selectedPhotoChange = new EventEmitter<PhotoInfo>();
  private _selectedPhoto = null;
  get selectedPhoto(): PhotoInfo { return this._selectedPhoto; }
  set selectedPhoto(val: PhotoInfo) {
    this._selectedPhoto = val;
    this.selectedPhotoChange.emit(this._selectedPhoto);
  }

  private _photos: PhotoInfo[] = [
        { title: 'Title1', imgSrc: 'assets/photo1', imgWidth: '100%', imgHeight: '100%' },
        { title: 'Title2', imgSrc: 'assets/photo2' },
        { title: 'Title3', imgSrc: 'assets/photo3' },
      ];
  get photos(): PhotoInfo[] { return this._photos; }
  @Input() set photos(val: PhotoInfo[]) { this._photos = val; this.refreshView(); }

  private _options: PhotoCardOptions = { borderColor: '#ddd', borderRadius: '10px', showNumber: true };
  get options(): PhotoCardOptions { return this._options; }
  @Input() set options(val: PhotoCardOptions) { this._options = val; }

  constructor() {
    this.refreshView();
  }

  ngOnInit() {
  }

  refreshView() {
    this.photoCount = (this.photos == null ? 0 : this.photos.length);

    if (this._selectedPhotoIndex >= this.photoCount) {
      this._selectedPhotoIndex = (this.photoCount - 1);
    }

    let selectedPhoto: PhotoInfo = null;
    if (this.photos != null) {
      selectedPhoto = this.photos[this.selectedPhotoIndex];
    }
    this.selectedPhoto = selectedPhoto;
  }

  canMoveNext(): boolean {
    return (this.selectedPhotoIndex < this.photoCount);
  }

  canMoveBack(): boolean {
    return (this.selectedPhotoIndex > 0);
  }

  moveNext() {
    if (this.canMoveNext()) {
      this.selectedPhotoIndex += 1;
    }
  }

  moveBack() {
    if (this.canMoveBack()) {
      this.selectedPhotoIndex -= 1;
    }
  }

}


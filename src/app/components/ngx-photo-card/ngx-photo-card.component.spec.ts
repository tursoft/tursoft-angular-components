import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPhotoCardComponent } from './ngx-photo-card.component';

describe('NgxPhotoCardComponent', () => {
  let component: NgxPhotoCardComponent;
  let fixture: ComponentFixture<NgxPhotoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPhotoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPhotoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

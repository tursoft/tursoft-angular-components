import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTextExpanderComponent } from './ngx-text-expander.component';

describe('NgxTextExpanderComponent', () => {
  let component: NgxTextExpanderComponent;
  let fixture: ComponentFixture<NgxTextExpanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTextExpanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTextExpanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

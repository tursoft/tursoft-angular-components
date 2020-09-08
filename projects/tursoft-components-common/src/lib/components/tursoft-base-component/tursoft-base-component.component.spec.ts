import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TursoftBaseComponentComponent } from './tursoft-base-component.component';

describe('TursoftBaseComponentComponent', () => {
  let component: TursoftBaseComponentComponent;
  let fixture: ComponentFixture<TursoftBaseComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TursoftBaseComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TursoftBaseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TursoftCollapsibleComponent } from './tursoft-collapsible.component';

describe('TursoftCollapsibleComponent', () => {
  let component: TursoftCollapsibleComponent;
  let fixture: ComponentFixture<TursoftCollapsibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TursoftCollapsibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TursoftCollapsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

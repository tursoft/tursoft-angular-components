import { TestBed } from '@angular/core/testing';

import { TursoftCollapsibleService } from './tursoft-collapsible.service';

describe('TursoftCollapsibleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TursoftCollapsibleService = TestBed.get(TursoftCollapsibleService);
    expect(service).toBeTruthy();
  });
});

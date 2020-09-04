import { TestBed } from '@angular/core/testing';

import { NgxPhotoCardService } from './ngx-photo-card.service';

describe('NgxPhotoCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxPhotoCardService = TestBed.get(NgxPhotoCardService);
    expect(service).toBeTruthy();
  });
});

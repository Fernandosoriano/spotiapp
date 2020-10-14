import { TestBed } from '@angular/core/testing';

import { SpottifyService } from './spottify.service';

describe('SpottifyService', () => {
  let service: SpottifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpottifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DelisystemApiService } from './delisystem-api.service';

describe('DelisystemApiService', () => {
  let service: DelisystemApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelisystemApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

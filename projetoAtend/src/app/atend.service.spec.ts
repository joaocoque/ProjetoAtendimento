import { TestBed } from '@angular/core/testing';

import { AtendService } from './atend.service';

describe('AtendService', () => {
  let service: AtendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

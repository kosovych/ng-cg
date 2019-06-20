import { TestBed } from '@angular/core/testing';

import { CounerService } from './couner.service';

describe('CounerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CounerService = TestBed.get(CounerService);
    expect(service).toBeTruthy();
  });
});

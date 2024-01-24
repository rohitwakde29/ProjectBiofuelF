import { TestBed } from '@angular/core/testing';

import { SuppliermaterialserviceService } from './suppliermaterialservice.service';

describe('SuppliermaterialserviceService', () => {
  let service: SuppliermaterialserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuppliermaterialserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

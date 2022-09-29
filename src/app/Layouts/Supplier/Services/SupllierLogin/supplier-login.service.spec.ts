import { TestBed } from '@angular/core/testing';

import { SupplierLoginService } from './supplier-login.service';

describe('SupplierLoginService', () => {
  let service: SupplierLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplierLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

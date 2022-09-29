import { TestBed } from '@angular/core/testing';

import { FullProductsService } from './full-products.service';

describe('FullProductsService', () => {
  let service: FullProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

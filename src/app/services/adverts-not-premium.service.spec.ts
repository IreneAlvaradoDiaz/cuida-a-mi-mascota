import { TestBed } from '@angular/core/testing';

import { AdvertsNotPremiumService } from './adverts-not-premium.service';

describe('AdvertsNotPremiumService', () => {
  let service: AdvertsNotPremiumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvertsNotPremiumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

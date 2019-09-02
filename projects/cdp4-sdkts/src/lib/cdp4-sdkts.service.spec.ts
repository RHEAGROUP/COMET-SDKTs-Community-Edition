import { TestBed } from '@angular/core/testing';

import { Cdp4SdktsService } from './cdp4-sdkts.service';

describe('Cdp4SdktsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Cdp4SdktsService = TestBed.get(Cdp4SdktsService);
    expect(service).toBeTruthy();
  });
});

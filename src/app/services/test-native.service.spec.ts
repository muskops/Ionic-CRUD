import { TestBed } from '@angular/core/testing';

import { TestNativeService } from './test-native.service';

describe('TestNativeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestNativeService = TestBed.get(TestNativeService);
    expect(service).toBeTruthy();
  });
});

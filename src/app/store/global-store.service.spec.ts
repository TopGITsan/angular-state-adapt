import { TestBed } from '@angular/core/testing';

import { GlobalStoreService } from './global-store.service';
import { defaultStoreProvider } from '@state-adapt/angular';

describe('GlobalStoreService', () => {
  let service: GlobalStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [defaultStoreProvider],
    });
    service = TestBed.inject(GlobalStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

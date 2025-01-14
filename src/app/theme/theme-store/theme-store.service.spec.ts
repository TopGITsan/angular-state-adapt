import { TestBed } from '@angular/core/testing';

import { ThemeStoreService } from './theme-store.service';
import { defaultStoreProvider } from '@state-adapt/angular';

describe('ThemeStoreService', () => {
  let service: ThemeStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [defaultStoreProvider],
    });
    service = TestBed.inject(ThemeStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

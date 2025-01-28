import { TestBed } from '@angular/core/testing';

import { LangStoreService } from './lang-store.service';
import { defaultStoreProvider } from '@state-adapt/angular';
import { getTranslocoTestingModule } from '@transloco/get-transloco-testing-module.function';

describe('LangStoreService', () => {
  let service: LangStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoTestingModule()],
      providers: [defaultStoreProvider],
    });
    service = TestBed.inject(LangStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

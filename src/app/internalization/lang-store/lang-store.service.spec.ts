import { TestBed } from '@angular/core/testing';

import { LangStoreService } from './lang-store.service';
import { defaultStoreProvider } from '@state-adapt/angular';
import { getTranslocoTestingModule } from '@internalization/get-transloco-testing-module.function';
import { provideApplicationBus } from '.././../event-hub/provide-application-bus.function';

describe('LangStoreService', () => {
  let service: LangStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoTestingModule()],
      providers: [defaultStoreProvider, provideApplicationBus()],
    });
    service = TestBed.inject(LangStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

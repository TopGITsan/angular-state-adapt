import { TestBed } from '@angular/core/testing';

import { defaultStoreProvider } from '@state-adapt/angular';
import { ShellSidenvStoreService } from './shell-sidenav.service';

describe('GlobalStoreService', () => {
  let service: ShellSidenvStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [defaultStoreProvider, ShellSidenvStoreService],
    });
    service = TestBed.inject(ShellSidenvStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import {
  closeSidenavChange$,
  toggleSidenavChange$,
} from '@actions/sidenav.actions';
import { Injectable } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { getId } from '@state-adapt/core';
import { initialGlobalState } from './global-state.type';
import { globalAdapter } from './global.adapter';

@Injectable({
  providedIn: 'root',
})
export class GlobalStoreService {
  readonly store = adapt(initialGlobalState, {
    adapter: globalAdapter,
    sources: {
      toggleIsSidenavOpend: toggleSidenavChange$,
      setIsSidenavOpendFalse: closeSidenavChange$,
    },
    path: 'global_' + getId(),
  });
}

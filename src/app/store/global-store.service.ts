import {
  closeSidenavChange$,
  toggleSidenavChange$,
} from '@actions/sidenav.actions';
import { Injectable } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { createAdapter } from '@state-adapt/core';
import { GlobalState, initialGlobalState } from './global-state.type';

@Injectable({
  providedIn: 'root',
})
export class GlobalStoreService {
  readonly store = adapt(initialGlobalState, {
    adapter: createAdapter<GlobalState>()({
      openSidenav: (state) => ({ ...state, sidenavOpened: true }),
      closeSidenav: (state) => ({ ...state, sidenavOpened: false }),
      toggleSidenav: (state) => ({
        ...state,
        sidenavOpened: !state.sidenavOpened,
      }),
      selectors: {
        sidenavOpened: (state) => state.sidenavOpened,
      },
    }),
    sources: {
      toggleSidenav: toggleSidenavChange$,
      closeSidenav: closeSidenavChange$,
    },
  });
}

import {
  closeSidenavChange$,
  toggleSidenavChange$,
} from '@actions/sidenav.actions';
import { BreakpointObserver } from '@angular/cdk/layout';
import { inject, Injectable } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { getId } from '@state-adapt/core';
import { toSource } from '@state-adapt/rxjs';
import { filter } from 'rxjs';
import { initialGlobalState } from './global-state.type';
import { globalAdapter } from './global.adapter';
import { globalStorePrefix } from './global.constants';

@Injectable({
  providedIn: 'root',
})
export class GlobalStoreService {
  private readonly breakpointObserver = inject(BreakpointObserver);
  sidenavModeOverChange$ = this.breakpointObserver
    .observe(['(min-width: 960px)'])
    .pipe(
      filter((state) => state.matches),
      toSource(`[${globalStorePrefix}] sidenavModeOverChange$`),
    );
  readonly store = adapt(initialGlobalState, {
    adapter: globalAdapter,
    sources: {
      toggleIsSidenavOpend: toggleSidenavChange$,
      setIsSidenavOpendFalse: closeSidenavChange$,
      setSidenavModeOver: this.breakpointObserver
        .observe(['(max-width: 959px)'])
        .pipe(
          filter((state) => state.matches),
          toSource(`[${globalStorePrefix}] sidenavModeOverChange$`),
        ),
      setSidenavModeSide: this.sidenavModeOverChange$,
    },
    path: globalStorePrefix + '_' + getId(),
  });
}

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
import { initialShellSidenavState } from './shell-sidenav-state.type';
import { shellSidenavAdapter } from './shell-sidenav.adapter';
import { shellSidenavStorePrefix } from './shell-sidenav.constants';

@Injectable({
  providedIn: 'root',
})
export class ShellSidenvStoreService {
  private readonly breakpointObserver = inject(BreakpointObserver);
  sidenavModeOverChange$ = this.breakpointObserver
    .observe(['(min-width: 960px)'])
    .pipe(
      filter((state) => state.matches),
      toSource(`[${shellSidenavStorePrefix}] sidenavModeOverChange$`),
    );
  readonly store = adapt(initialShellSidenavState, {
    adapter: shellSidenavAdapter,
    sources: {
      toggleIsSidenavOpend: toggleSidenavChange$,
      setIsSidenavOpendFalse: closeSidenavChange$,
      setSidenavModeOver: this.breakpointObserver
        .observe(['(max-width: 959px)'])
        .pipe(
          filter((state) => state.matches),
          toSource(`[${shellSidenavStorePrefix}] sidenavModeOverChange$`),
        ),
      setSidenavModeSide: this.sidenavModeOverChange$,
    },
    path: shellSidenavStorePrefix + '_' + getId(),
  });
}

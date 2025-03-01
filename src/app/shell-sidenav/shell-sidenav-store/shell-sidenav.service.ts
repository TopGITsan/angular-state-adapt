import { BreakpointObserver } from '@angular/cdk/layout';
import { inject, Injectable } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { getId } from '@state-adapt/core';
import { toSource } from '@state-adapt/rxjs';
import { filter } from 'rxjs';
import { closeSidenavChange$, toggleSidenavChange$ } from '../sidenav.actions';
import { initialShellSidenavState } from './shell-sidenav-state.type';
import { shellSidenavAdapter } from './shell-sidenav.adapter';
import {
  breakpointMaxWidth,
  breakpointMinWidth,
  shellSidenavStorePrefix,
} from './shell-sidenav.constants';

@Injectable()
export class ShellSidenvStoreService {
  private readonly breakpointObserver = inject(BreakpointObserver);
  sidenavModeOverChange$ = this.breakpointObserver
    .observe([breakpointMinWidth])
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
        .observe([breakpointMaxWidth])
        .pipe(
          filter((state) => state.matches),
          toSource(`[${shellSidenavStorePrefix}] sidenavModeOverChange$`),
        ),
      setSidenavModeSide: this.sidenavModeOverChange$,
    },
    path: shellSidenavStorePrefix + '_' + getId(),
  });
}

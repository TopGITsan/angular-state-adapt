import {
  closeSidenavChange$,
  toggleSidenavChange$,
} from '@actions/sidenav.actions';
import { BreakpointObserver } from '@angular/cdk/layout';
import { inject, Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { adapt } from '@state-adapt/angular';
import { getId } from '@state-adapt/core';
import { toSource } from '@state-adapt/rxjs';
import { isLang } from '@transloco/is-lang.function';
import { setLanguageToLocalStorage } from '@transloco/lang-local-storage';
import { Lang } from '@transloco/lang.types';
import {
  languageChange$,
  languageFromStorage$,
} from '@transloco/language.actions';
import { filter, merge, switchMap, tap } from 'rxjs';
import { initialGlobalState } from './global-state.type';
import { globalAdapter } from './global.adapter';
@Injectable({
  providedIn: 'root',
})
export class GlobalStoreService {
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly translocoService = inject(TranslocoService);
  sidenavModeOverChange$ = this.breakpointObserver
    .observe(['(min-width: 960px)'])
    .pipe(
      filter((state) => state.matches),
      toSource('[Global] sidenavModeOverChange$'),
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
          toSource('[Global] sidenavModeOverChange$'),
        ),
      setSidenavModeSide: this.sidenavModeOverChange$,
      changeLanguage: merge(languageFromStorage$, languageChange$).pipe(
        tap((action) => this.translocoService.setActiveLang(action.payload)),
        switchMap(() =>
          this.translocoService.langChanges$.pipe(
            filter((lang): lang is Lang => isLang(lang)),
            tap((lang) => setLanguageToLocalStorage(lang)),
            toSource('[Global] Transloco langChanges$'),
          ),
        ),
      ),
    },
    path: 'global_' + getId(),
  });
}

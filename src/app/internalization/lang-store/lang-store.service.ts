import { inject, Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { adapt } from '@state-adapt/angular';
import { getId } from '@state-adapt/core';
import { toSource } from '@state-adapt/rxjs';
import { isLang } from '@internalization/is-lang.function';
import {
  getLanguageFromLocalStorage,
  setLanguageToLocalStorage,
} from '@internalization/lang-local-storage';
import { langStorePrefix } from '@internalization/lang.constants';
import { Lang } from '@internalization/lang.types';
import { filter, merge, of, switchMap, tap } from 'rxjs';
import { initialLanguageState } from './lang-state.type';
import { languageAdapter } from './language.adapter';
import { languageChange$ } from '@actions/lang.actions';

@Injectable({
  providedIn: 'root',
})
export class LangStoreService {
  private readonly translocoService = inject(TranslocoService);

  readonly languageFromStorage$ = of(getLanguageFromLocalStorage()).pipe(
    filter((lang): lang is Lang => isLang(lang)),
    toSource(`[${langStorePrefix}] Transloco languageFromStorage$`),
  );

  readonly store = adapt(initialLanguageState, {
    adapter: languageAdapter,
    sources: {
      changeLang: merge(this.languageFromStorage$, languageChange$).pipe(
        tap((action) => this.translocoService.setActiveLang(action.payload)),
        switchMap((action) =>
          this.translocoService.langChanges$.pipe(
            filter((lang): lang is Lang => isLang(lang)),
            tap((lang) => setLanguageToLocalStorage(lang)),
            toSource(action.type),
          ),
        ),
      ),
    },
    path: langStorePrefix + '_' + getId(),
  });
}

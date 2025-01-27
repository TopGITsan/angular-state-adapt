import { inject, Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { adapt } from '@state-adapt/angular';
import { getId } from '@state-adapt/core';
import { toSource } from '@state-adapt/rxjs';
import { isLang } from '@transloco/is-lang.function';
import { setLanguageToLocalStorage } from '@transloco/lang-local-storage';
import { storePrefix } from '@transloco/lang.constants';
import { Lang } from '@transloco/lang.types';
import { filter, merge, switchMap, tap } from 'rxjs';
import { initialLanguageState } from './lang-state.type';
import { languageChange$, languageFromStorage$ } from './language.actions';
import { languageAdapter } from './language.adapter';

@Injectable({
  providedIn: 'root',
})
export class LangStoreService {
  private readonly translocoService = inject(TranslocoService);

  readonly store = adapt(initialLanguageState, {
    adapter: languageAdapter,
    sources: {
      changeLang: merge(languageFromStorage$, languageChange$).pipe(
        tap((action) => this.translocoService.setActiveLang(action.payload)),
        switchMap(() =>
          this.translocoService.langChanges$.pipe(
            filter((lang): lang is Lang => isLang(lang)),
            tap((lang) => setLanguageToLocalStorage(lang)),
            toSource(`[${storePrefix}] Transloco langChanges$`),
          ),
        ),
      ),
    },
    path: storePrefix + '_' + getId(),
  });
}

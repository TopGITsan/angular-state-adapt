import { Source, toSource } from '@state-adapt/rxjs';
import { filter, of } from 'rxjs';
import { getLanguageFromLocalStorage } from '../lang-local-storage';
import { isLang } from '../is-lang.function';
import { Lang } from '../lang.types';
import { storePrefix } from '@transloco/lang.constants';

export const languageChange$ = new Source<Lang>(
  `[${storePrefix}] Transloco languageChange$`,
);

export const languageFromStorage$ = of(getLanguageFromLocalStorage()).pipe(
  filter((lang): lang is Lang => isLang(lang)),
  toSource(`[${storePrefix}] Transloco languageFromStorage$`),
);

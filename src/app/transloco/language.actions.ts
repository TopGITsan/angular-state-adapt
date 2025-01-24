import { Source, toSource } from '@state-adapt/rxjs';
import { filter, of } from 'rxjs';
import { getLanguageFromLocalStorage } from './lang-local-storage';
import { isLang } from './is-lang.function';
import { Lang } from './lang.types';

export const languageChange$ = new Source<Lang>(
  '[Global] Transloco languageChange$',
);

export const languageFromStorage$ = of(getLanguageFromLocalStorage()).pipe(
  filter((lang): lang is Lang => isLang(lang)),
  toSource('[Global] Transloco languageFromStorage$'),
);

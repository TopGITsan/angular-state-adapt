import { errorAdapter } from '@shared/adapters/error.adapter';
import { createAdapter, joinAdapters } from '@state-adapt/core';
import { isLang } from '../is-lang.function';
import { Lang } from '../lang.types';
import { LangugageState } from './lang-state.type';

export const langAdapter = createAdapter<Lang>()({
  change: (currLang, newLang: Lang) => (isLang(newLang) ? newLang : currLang),
});

export const languageAdapter = joinAdapters<LangugageState>()({
  lang: langAdapter,
  error: errorAdapter,
})({
  // selectors
})({
  // group reactions
})();

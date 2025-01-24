import { createAdapter } from '@state-adapt/core';
import { isLang } from './is-lang.function';
import { Lang } from './lang.types';

export const languageAdapter = createAdapter<Lang>()({
  change: (currLang, newLang: Lang) => (isLang(newLang) ? newLang : currLang),
});

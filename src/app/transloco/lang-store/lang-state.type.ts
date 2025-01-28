import { fallbackLang } from '@transloco/lang.constants';
import { Lang } from '@transloco/lang.types';

export interface LangugageState {
  lang: Lang;
  error: object | null;
}
export const initialLanguageState: LangugageState = {
  lang: fallbackLang,
  error: null,
};

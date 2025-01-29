import { fallbackLang } from '@internalization/lang.constants';
import { Lang } from '@internalization/lang.types';

export interface LangugageState {
  lang: Lang;
  error: object | null;
}
export const initialLanguageState: LangugageState = {
  lang: fallbackLang,
  error: null,
};

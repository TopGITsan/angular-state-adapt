import { Lang, LangMap } from './lang.types';

export const languageLocalStorageKey = 'less-language';
export const fallbackLang = 'en';
// app.config
// The type 'readonly ["de", "fr", "en", "es", "it", "ro"]' is 'readonly' and cannot be assigned to the mutable type 'LangDefinition[]'
// export const LANG_LIST = ['de', 'fr', 'en', 'es', 'it', 'ro'] as const;

export const langList: Lang[] = Object.keys(LangMap).filter(
  (lang): lang is Lang => typeof lang === 'string' && lang in LangMap,
);

import { getBrowserLang } from '@jsverse/transloco';

export enum LangMap {
  de = 'de',
  fr = 'fr',
  en = 'en',
  es = 'es',
  it = 'it',
  ro = 'ro',
}
export const fallbackLang = 'en';

type Lang = keyof typeof LangMap;
export const langList: Lang[] = Object.keys(LangMap).filter(
  (lang): lang is Lang => typeof lang === 'string' && lang in LangMap,
);

export function isLang(key: unknown): boolean {
  return !!key && typeof key === 'string' && langList.includes(key as Lang);
}
export function getBrowserLanguage(): Lang {
  const browserLanguage = getBrowserLang();
  const isSupported = isLang(browserLanguage);
  if (isSupported) {
    return browserLanguage as Lang;
  }
  return fallbackLang;
}

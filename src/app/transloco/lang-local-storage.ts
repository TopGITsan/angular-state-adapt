import { languageLocalStorageKey } from './lang.constants';
import { Lang } from './lang.types';

export function getLanguageFromLocalStorage() {
  return localStorage.getItem(languageLocalStorageKey) ?? '';
}

export function setLanguageToLocalStorage(lang: Lang) {
  return localStorage.setItem(languageLocalStorageKey, lang);
}

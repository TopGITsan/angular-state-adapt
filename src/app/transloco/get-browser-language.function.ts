import { getBrowserLang } from '@jsverse/transloco';
import { isLang } from './is-lang.function';
import { fallbackLang } from './lang.state';
import { Lang } from './lang.types';

export function getBrowserLanguage(): Lang {
  const browserLanguage = getBrowserLang();
  const isSupported = isLang(browserLanguage);
  if (isSupported) {
    return browserLanguage as Lang;
  }
  return fallbackLang;
}

import { EnvironmentProviders, Provider } from '@angular/core';
import { provideTransloco } from '@jsverse/transloco';
import { getBrowserLanguage } from './get-browser-language.function';
import { fallbackLang, langList } from './lang.constants';
import { TranslocoHttpLoader } from './transloco-loader.service';

export function provideAppTransloco(): Provider | EnvironmentProviders {
  return provideTransloco({
    config: {
      availableLangs: langList,
      defaultLang: getBrowserLanguage(),
      fallbackLang: fallbackLang,
      // Remove this option if your application doesn't support changing language in runtime.
      reRenderOnLangChange: true,
      prodMode: false, // !isDevMode(),
    },
    loader: TranslocoHttpLoader,
  });
}

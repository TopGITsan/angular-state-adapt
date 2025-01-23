import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  isDevMode,
  provideExperimentalCheckNoChangesForDebug,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideTransloco } from '@jsverse/transloco';
import { defaultStoreProvider } from '@state-adapt/angular';
import { getBrowserLanguage } from '@transloco/get-browser-language.function';
import { fallbackLang, langList } from '@transloco/lang.state';
import { TranslocoHttpLoader } from '@transloco/transloco-loader.service';
import { routes } from './app.routes';
export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideAnimationsAsync(),
    defaultStoreProvider,
    // only for development purposes
    isDevMode()
      ? provideExperimentalCheckNoChangesForDebug({
          interval: 10000,
          useNgZoneOnStable: false,
          exhaustive: true,
        })
      : [],
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: langList,
        defaultLang: getBrowserLanguage(),
        fallbackLang: fallbackLang,
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: false, // !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};

import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  isDevMode,
  provideExperimentalCheckNoChangesForDebug,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { defaultStoreProvider } from '@state-adapt/angular';
import { provideAppTransloco } from '@transloco/provide-app-transloco.provider';
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
    provideAppTransloco(),
  ],
};

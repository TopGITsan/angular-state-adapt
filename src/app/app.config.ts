import {
  ApplicationConfig,
  isDevMode,
  provideExperimentalCheckNoChangesForDebug,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideAnimationsAsync(),
    // only for development purposes
    isDevMode()
      ? provideExperimentalCheckNoChangesForDebug({
          interval: 10000,
          useNgZoneOnStable: false,
          exhaustive: true,
        })
      : [],
  ],
};

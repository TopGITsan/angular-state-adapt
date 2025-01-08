import {
  ApplicationConfig,
  isDevMode,
  provideExperimentalCheckNoChangesForDebug,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
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

import { Route } from '@angular/router';

import {
  provideTranslocoLoadingTpl,
  provideTranslocoScope,
} from '@jsverse/transloco';
import { inlineLoader } from '@transloco/inline-loader.function';

export const ABOUT_ROUTE: Route = {
  path: 'about',
  loadComponent: () =>
    import('./about.component').then((m) => m.AboutComponent),
  providers: [
    provideTranslocoScope({
          scope: 'about',
          loader: inlineLoader(
            (lang: string, folder: string) => import(`./${folder}/${lang}.json`),
          ),
        }),
    provideTranslocoLoadingTpl(
      `<span id="default-loading-template">Loading template...</span>`,
    ),
  ],
};

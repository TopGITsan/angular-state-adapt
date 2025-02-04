import { Source } from '@state-adapt/rxjs';

export const nextThemeChange$ = new Source<void>(
  '[Theme] nextThemeChange$',
);

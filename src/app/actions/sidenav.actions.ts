import { Source } from '@state-adapt/rxjs';

export const toggleSidenavChange$ = new Source<void>(
  '[Global] toggleSidenavChange$',
);

export const closeSidenavChange$ = new Source<void>(
  '[Global] closeSidenavChange$',
);

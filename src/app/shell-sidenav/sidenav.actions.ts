import { Source } from '@state-adapt/rxjs';
import { globalStorePrefix } from '@store/global.constants';

export const toggleSidenavChange$ = new Source<void>(
  `[${globalStorePrefix}] toggleSidenavChange$`,
);

export const closeSidenavChange$ = new Source<void>(
  `[${globalStorePrefix}] closeSidenavChange$`,
);

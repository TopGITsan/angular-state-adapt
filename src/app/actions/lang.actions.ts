import { Source } from '@state-adapt/rxjs';
import { langStorePrefix } from '@transloco/lang.constants';
import { Lang } from '@transloco/lang.types';

export const languageChange$ = new Source<Lang>(
  `[${langStorePrefix}] Transloco languageChange$`,
);

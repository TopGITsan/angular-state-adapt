import { Source } from '@state-adapt/rxjs';
import { langStorePrefix } from '@internalization/lang.constants';
import { Lang } from '@internalization/lang.types';

export const languageChange$ = new Source<Lang>(
  `[${langStorePrefix}] Transloco languageChange$`,
);

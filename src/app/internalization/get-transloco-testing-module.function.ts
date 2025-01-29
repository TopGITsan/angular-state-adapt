import {
  TranslocoTestingModule,
  TranslocoTestingOptions,
} from '@jsverse/transloco';

import aboutDE from '@about/i18n/de.json';
import aboutEN from '@about/i18n/en.json';
import aboutES from '@about/i18n/es.json';
import aboutFR from '@about/i18n/fr.json';
import aboutIT from '@about/i18n/it.json';
import aboutRO from '@about/i18n/ro.json';
import de from '../../assets/i18n/de.json';
import en from '../../assets/i18n/en.json';
import es from '../../assets/i18n/es.json';
import fr from '../../assets/i18n/fr.json';
import it from '../../assets/i18n/it.json';
import ro from '../../assets/i18n/ro.json';
import internalizationDE from '@internalization/i18n/de.json';
import internalizationEN from '@internalization/i18n/en.json';
import internalizationES from '@internalization/i18n/es.json';
import internalizationFR from '@internalization/i18n/fr.json';
import internalizationIT from '@internalization/i18n/it.json';
import internalizationRO from '@internalization/i18n/ro.json';
import { langList } from './lang.constants';

export function getTranslocoTestingModule(options: TranslocoTestingOptions = {}) {
  const { langs, translocoConfig, ...rest } = options;
  return TranslocoTestingModule.forRoot({
    langs: {
      en,
      es,
      it,
      de,
      fr,
      ro,

      'about/es': aboutES,
      'about/en': aboutEN,
      'about/it': aboutIT,
      'about/fr': aboutFR,
      'about/de': aboutDE,
      'about/ro': aboutRO,

      'internalization/es': internalizationES,
      'internalization/en': internalizationEN,
      'internalization/it': internalizationIT,
      'internalization/fr': internalizationFR,
      'internalization/de': internalizationDE,
      'internalization/ro': internalizationRO,

      ...langs,
    },
    translocoConfig: {
      availableLangs: langList,
      defaultLang: 'en',
      ...translocoConfig,
    },
    ...rest,
  });
}

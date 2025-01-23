import { TranslocoGlobalConfig } from '@jsverse/transloco-utils';

const config: TranslocoGlobalConfig = {
  rootTranslationsPath: 'src/assets/i18n/',
  langs: ['en', 'es', 'it', 'fr', 'de', 'ro'],
  keysManager: {},
  scopePathMap: {
    about: 'src/app/about/i18n',
    theme: 'src/app/theme/i18n',
  },
};

export default config;

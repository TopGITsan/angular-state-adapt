import { InlineLoader, Translation } from '@jsverse/transloco';
import { langList } from './lang.types';

export const inlineLoader = (
  importer: (lang: string, folder: string) => Promise<Translation>,
  folder = 'i18n',
): InlineLoader =>
  langList.reduce((acc: InlineLoader, lang: string) => {
    acc[lang] = () => importer(lang, folder);
    return acc;
  }, {});

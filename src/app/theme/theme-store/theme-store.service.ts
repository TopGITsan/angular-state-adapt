import { nextThemeChange$ } from '@actions/theme.actions';
import { Injectable } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { getId } from '@state-adapt/core';
import { toSource } from '@state-adapt/rxjs';
import { of } from 'rxjs';
import { themeLocalStorageKey } from '../theme.type';
import { initialThemeState } from './theme-state.type';
import { themeAdapter } from './theme.adapter';
import { themeStorePrefix } from './theme.constants';

@Injectable()
export class ThemeStoreService {
  readonly store = adapt(initialThemeState, {
    adapter: themeAdapter,
    sources: {
      changeTheme: nextThemeChange$,
      storageTheme: of(getColorTheme()).pipe(
        toSource(`[${themeStorePrefix}] themeFromStorage$`),
      ),
    },
    path: themeStorePrefix + '_' + getId(),
  });
}
export function getColorTheme() {
  return localStorage.getItem(themeLocalStorageKey) ?? '';
}

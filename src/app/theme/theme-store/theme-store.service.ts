import { nextThemeChange$ } from '@actions/theme.actions';
import { Injectable } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { createAdapter, getId } from '@state-adapt/core';
import { toSource } from '@state-adapt/rxjs';
import { of } from 'rxjs';
import { isThemeKey, themeValues } from '../theme.type';

@Injectable()
export class ThemeStoreService {
  readonly store = adapt('', {
    // TODO: can the type be ThemeKey ?
    adapter: createAdapter<string>()({
      changeTheme: (state) => {
        const nextTheme = nextValueFromArray(state, themeValues);
        return setColorTheme(nextTheme, state);
      },
      storageTheme: (state, event: string) => {
        return setColorTheme(event);
      },
    }),
    sources: {
      changeTheme: nextThemeChange$,
      storageTheme: of(getColorTheme()).pipe(
        toSource('[Theme] themeFromStorage$'),
      ),
    },
    path: 'theme_' + getId(),
  });
}

export function setColorTheme(themeToSet: string, themeToRemove = '') {
  if (!isThemeKey(themeToSet)) {
    themeToSet = '';
  }
  /* eslint-disable  @typescript-eslint/no-unused-expressions */
  themeToRemove &&
    document.querySelector('body')!.classList.remove(themeToRemove);
  themeToSet && document.querySelector('body')!.classList.add(themeToSet);

  localStorage.setItem('theme', themeToSet);

  return themeToSet;
}

export function getColorTheme() {
  return localStorage.getItem('theme') ?? '';
}
function nextValueFromArray(arrayValue: string, array: string[]): string {
  if (
    arrayValue == null ||
    arrayValue == undefined ||
    typeof arrayValue !== 'string'
  ) {
    arrayValue = '';
  }
  const currentIndex = array.indexOf(arrayValue);
  const nextIndex = (currentIndex + 1) % array.length;
  const nextTheme = array[nextIndex];
  return nextTheme;
}

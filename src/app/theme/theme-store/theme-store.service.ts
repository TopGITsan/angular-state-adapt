import { nextThemeChange$ } from '@actions/theme.actions';
import { Injectable } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { createAdapter } from '@state-adapt/core';
import { toSource } from '@state-adapt/rxjs';
import { of } from 'rxjs';
import { isThemeKey, themeValues } from '../theme.type';

@Injectable({
  providedIn: 'root',
})
export class ThemeStoreService {
  readonly store = adapt('', {
    // TODO: can the type be ThemeKey ?
    adapter: createAdapter<string>()({
      changeTheme: (state, event, initialState: string) => {
        const nextTheme = nextValueFromArray(state, themeValues);
        return setColorTheme(nextTheme, state);
      },
      storageTheme: (state, event: string, initialState: string) => {
        return setColorTheme(event);
      },
      selectors: {
        theme: (theme) => theme, // Will be memoized
      },
    }),
    sources: {
      changeTheme: nextThemeChange$,
      storageTheme: of(getColorTheme()).pipe(
        toSource('[Theme] themeFromStorage$'),
      ),
    },
  });
}

export function setColorTheme(themeToSet: string, themeToRemove: string = '') {
  if (!isThemeKey(themeToSet)) {
    themeToSet = '';
  }

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

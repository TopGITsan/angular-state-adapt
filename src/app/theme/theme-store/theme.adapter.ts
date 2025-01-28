import { errorAdapter } from '@shared/adapters/error.adapter';
import { createAdapter, joinAdapters } from '@state-adapt/core';
import {
  isThemeKey,
  ThemeKey,
  themeLocalStorageKey,
  themeValues,
} from '@theme/theme.type';
import { ThemeState } from './theme-state.type';

export const selectedThemeAdapter = createAdapter<ThemeKey>()({
  change: (state) => {
    const nextTheme = nextValueFromArray(state, themeValues) ?? '';
    return setColorTheme(nextTheme, state);
  },
  storage: (state, event) => {
    return setColorTheme(event);
  },
});
export const themeAdapter = joinAdapters<ThemeState>()({
  theme: selectedThemeAdapter,
  error: errorAdapter,
})({
  // selectors
})({
  // group reactions
})();

export function setColorTheme<T extends ThemeKey>(
  themeToSet: T,
  themeToRemove = '',
) {
  if (!isThemeKey(themeToSet)) {
    return '';
  }
  if (themeToRemove) {
    document.querySelector('body')!.classList.remove(themeToRemove);
  }
  if (themeToSet) {
    document.querySelector('body')!.classList.add(themeToSet);
  }

  localStorage.setItem(themeLocalStorageKey, themeToSet);

  return themeToSet;
}

function nextValueFromArray<T>(arrayValue: T, array: T[]): T | null {
  if (
    arrayValue == null ||
    arrayValue == undefined ||
    typeof arrayValue !== 'string'
  ) {
    return null;
  }
  const currentIndex = array.indexOf(arrayValue);
  const nextIndex = (currentIndex + 1) % array.length;
  const nextTheme = array[nextIndex];
  return nextTheme;
}

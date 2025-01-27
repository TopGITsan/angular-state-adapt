// export const themes = ['os-default', 'dark', 'light'] as const;
// export type Theme = (typeof themes)[number];

export const themeLocalStorageKey = 'less-theme';
export enum ThemeIconMap {
  '' = 'deblur',
  'dark' = 'dark_mode',
  'light' = 'light_mode',
}
export type ThemeKey = keyof typeof ThemeIconMap;
export const themeValues = Object.keys(ThemeIconMap).filter(
  (k): k is ThemeKey => typeof k === 'string' && k in ThemeIconMap,
);
export const themeButtonIcons = Object.values(ThemeIconMap).filter(
  (k): k is ThemeIconMap => typeof k === 'string',
);

export function isThemeKey(key: unknown): boolean {
  return typeof key === 'string' && themeValues.includes(key as ThemeKey);
}

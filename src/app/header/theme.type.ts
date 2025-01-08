// export const themes = ['os-default', 'dark', 'light'] as const;
// export type Theme = (typeof themes)[number];
export enum Theme {
  'os-default' = 'deblur',
  'dark' = 'dark_mode',
  'light' = 'light_mode',
}
export type ThemeKey = keyof typeof Theme;
export const themeValues = Object.keys(Theme).filter(
  (k): k is ThemeKey => typeof k === 'string' && k in Theme,
);
export const themeButtonIcons = Object.values(Theme).filter(
  (k): k is Theme => typeof k === 'string',
);

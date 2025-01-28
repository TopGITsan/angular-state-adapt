import { ThemeKey } from '@theme/theme.type';
import { initialTheme } from './theme.constants';

export interface ThemeState {
  theme: ThemeKey;
  error: object | null;
}
export const initialThemeState: ThemeState = {
  theme: initialTheme,
  error: null,
};

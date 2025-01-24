import { fallbackLang } from '@transloco/lang.constants';
import { Lang } from '@transloco/lang.types';

export type SidenavMode = 'over' | 'side';
export interface GlobalState {
  isSidenavOpend: boolean;
  error: object | null;
  sidenavMode: SidenavMode;
  language: Lang;
}
export const initialGlobalState: GlobalState = {
  isSidenavOpend: true,
  error: null,
  sidenavMode: 'side',
  language: fallbackLang,
};

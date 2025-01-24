import { createAdapter, joinAdapters } from '@state-adapt/core';
import { booleanAdapter } from '@state-adapt/core/adapters';
import { GlobalState, SidenavMode } from './global-state.type';
import { languageAdapter } from '@transloco/language.adapter';

const sidenavAdapter = booleanAdapter;
const errorAdapter = createAdapter<object | null>()({
  setNull: () => null,
});
const sidenavModeAdapter = createAdapter<SidenavMode>()({
  setSide: () => 'side',
  setOver: () => 'over',
});

export const globalAdapter = joinAdapters<GlobalState>()({
  isSidenavOpend: sidenavAdapter,
  error: errorAdapter,
  sidenavMode: sidenavModeAdapter,
  language: languageAdapter,
})({
  // selectors
})({
  // group reactions
})();

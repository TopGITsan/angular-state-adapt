import { createAdapter, joinAdapters } from '@state-adapt/core';
import { booleanAdapter } from '@state-adapt/core/adapters';
import { errorAdapter } from '@shared/adapters/error.adapter';
import { ShellSidenavState, SidenavMode } from './shell-sidenav-state.type';

const sidenavAdapter = booleanAdapter;

const sidenavModeAdapter = createAdapter<SidenavMode>()({
  setSide: () => 'side',
  setOver: () => 'over',
});

export const shellSidenavAdapter = joinAdapters<ShellSidenavState>()({
  isSidenavOpend: sidenavAdapter,
  error: errorAdapter,
  sidenavMode: sidenavModeAdapter,
})({
  // selectors
})({
  // group reactions
})();

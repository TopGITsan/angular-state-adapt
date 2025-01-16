import { createAdapter, joinAdapters } from '@state-adapt/core';
import { booleanAdapter } from '@state-adapt/core/adapters';
import { GlobalState } from './global-state.type';

const sidenavAdapter = booleanAdapter;
const errorAdapter = createAdapter<{} | null>()({
  setNull: () => null,
});
export const globalAdapter = joinAdapters<GlobalState>()({
  isSidenavOpend: sidenavAdapter,
  error: errorAdapter,
})({
  // selectors
})({
  // group reactions
})();

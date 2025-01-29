import { joinAdapters } from '@state-adapt/core';
import { GlobalState } from './global-state.type';
import { errorAdapter } from '@shared/adapters/error.adapter';

export const globalAdapter = joinAdapters<GlobalState>()({
  error: errorAdapter,
})({
  // selectors
})({
  // group reactions
})();

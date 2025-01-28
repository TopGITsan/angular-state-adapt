import { createAdapter } from '@state-adapt/core';

export const errorAdapter = createAdapter<object | null>()({
  setNull: () => null,
});

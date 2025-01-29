import { Injectable } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { getId } from '@state-adapt/core';
import { initialGlobalState } from './global-state.type';
import { globalAdapter } from './global.adapter';
import { globalStorePrefix } from './global.constants';

@Injectable({
  providedIn: 'root',
})
export class GlobalStoreService {
  readonly store = adapt(initialGlobalState, {
    adapter: globalAdapter,
    sources: {},
    path: globalStorePrefix + '_' + getId(),
  });
}

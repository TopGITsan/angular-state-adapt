import { EMPTY } from 'rxjs';
import { APPLICATION_BUS } from './event-bus.token';
import { EventBus } from './types/event-bus.interface';

export const APPLICATION_BUS_STUB: EventBus = {
  dispatch: () => null,
  on: () => EMPTY,
};

export const APPLICATION_BUS_STUB_PROVIDER = {
  provide: APPLICATION_BUS,
  useValue: APPLICATION_BUS_STUB,
};

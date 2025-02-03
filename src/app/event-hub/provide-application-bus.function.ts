import { EventBusService } from './event-bus/event-bus.service';
import { APPLICATION_BUS } from './event-bus/event-bus.token';

export function provideApplicationBus() {
  return {
    provide: APPLICATION_BUS,
    useClass: EventBusService,
  };
}

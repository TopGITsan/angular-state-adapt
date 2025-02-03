import { AppEvent } from '../event-bus/types/app-event.class';
import { Class } from '../event-bus/types/class.type';

export interface ApplicationEventHandler {
  eventClass: Class<AppEvent>;
  handle(event: AppEvent): void;
}

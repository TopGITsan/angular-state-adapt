import { ApplicationEventHandler } from './application-event-handler.interface';
import { APPLICATION_EVENT_HANDLER_TOKEN } from './application-event-handler.token';
import { Class } from '../event-bus/types/class.type';

export const provideApplicationEventHandler = (
  handlerClass: Class<ApplicationEventHandler>,
) => {
  return {
    provide: APPLICATION_EVENT_HANDLER_TOKEN,
    useClass: handlerClass,
    multi: true,
  };
};

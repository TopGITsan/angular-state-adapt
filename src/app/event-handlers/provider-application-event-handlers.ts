import { provideApplicationEventHandler } from '../event-hub/event-handler/provide-application-event-handler.function';
import { LanguageChangedEventHandler } from './language-changed-event-handler.service';

export const APPLICATION_EVENT_HANDLERS = [
  provideApplicationEventHandler(LanguageChangedEventHandler),
];

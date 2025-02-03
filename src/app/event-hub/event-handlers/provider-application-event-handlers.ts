import { provideApplicationEventHandler } from '../event-handler/provide-application-event-handler.function';
import { LanguageChangedEventHandler } from './language-changed-event-handler.service';

export const APPLICATION_EVENT_HANDLERS = [
  provideApplicationEventHandler(LanguageChangedEventHandler),
];

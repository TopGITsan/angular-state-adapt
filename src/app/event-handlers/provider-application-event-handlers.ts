import { LanguageChangedEventHandler } from '@welcome/language-changed-event-handler.service';
import { provideApplicationEventHandler } from '../event-hub/event-handler/provide-application-event-handler.function';

export const APPLICATION_EVENT_HANDLERS = [
  provideApplicationEventHandler(LanguageChangedEventHandler),
];

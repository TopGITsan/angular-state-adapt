import { Lang } from '@internalization/lang.types';
import { AppEvent } from '../event-hub/event-bus/types/app-event.class';

export class LanguageChangedEvent extends AppEvent {
  constructor(public readonly lang: Lang) {
    super();
  }
}

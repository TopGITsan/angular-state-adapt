import { Injectable } from '@angular/core';
import { ApplicationEventHandler } from '@event-hub/event-handler/application-event-handler.interface';
import { LanguageChangedEvent } from '../events/language-changed.event';

@Injectable()
export class LanguageChangedEventHandler implements ApplicationEventHandler {
  eventClass = LanguageChangedEvent;

  handle(event: LanguageChangedEvent) {
    console.log({ event });
  }
}

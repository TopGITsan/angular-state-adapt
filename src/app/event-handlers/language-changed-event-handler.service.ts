import { Injectable } from '@angular/core';
import { ApplicationEventHandler } from 'src/app/event-hub/event-handler/application-event-handler.interface';
import { LanguageChangedEvent } from '../events/language-change.event';

@Injectable()
export class LanguageChangedEventHandler implements ApplicationEventHandler {
  eventClass = LanguageChangedEvent;

  handle(event: LanguageChangedEvent) {
    console.log('>>>>>>>>>> LanguageChangedEventHandler', event.lang);
  }
}

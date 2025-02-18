import { inject, Injectable } from '@angular/core';
import { ApplicationEventHandler } from '@event-hub/event-handler/application-event-handler.interface';
import { LanguageChangedEvent } from '../events/language-changed.event';
import { WelcomeStoreService } from './welcome-store.service';

@Injectable()
export class LanguageChangedEventHandler implements ApplicationEventHandler {
  eventClass = LanguageChangedEvent;
  private readonly welcomeStore = inject(WelcomeStoreService);
  handle(event: LanguageChangedEvent) {
    console.log({ event });
    this.welcomeStore.language.next(event.lang);
  }
}

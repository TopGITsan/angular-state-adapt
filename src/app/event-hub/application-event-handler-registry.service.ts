import { ErrorHandler, inject, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { APPLICATION_BUS } from './event-bus/event-bus.token';
import { EventBus } from './event-bus/types/event-bus.interface';
import { ApplicationEventHandler } from './event-handler/application-event-handler.interface';
import { APPLICATION_EVENT_HANDLER_TOKEN } from './event-handler/application-event-handler.token';

@Injectable({
  providedIn: 'root',
})
export class ApplicationEventHandlerRegistryService {
  private _subscriptions: Subscription[] = [];
  private readonly applicationBus: EventBus = inject(APPLICATION_BUS);
  private readonly handlers: ApplicationEventHandler[] | null = inject(
    APPLICATION_EVENT_HANDLER_TOKEN,
    { optional: true },
  );
  private readonly _errorHandler: ErrorHandler = inject(ErrorHandler);

  init(): void {
    this._subscriptions.forEach((subscription) => subscription.unsubscribe());
    this._subscriptions = [];
    if (!!this.handlers && this.handlers.length) {
      this.handlers.forEach((handler) =>
        this._subscriptions.push(
          this.applicationBus.on(handler.eventClass).subscribe((event) => {
            try {
              handler.handle(event);
            } catch (error) {
              this._errorHandler.handleError(error);
            }
          }),
        ),
      );
    }
  }
}

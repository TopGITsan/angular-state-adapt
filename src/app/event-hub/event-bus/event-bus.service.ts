import { Injectable } from "@angular/core";
import { Subject, Observable, filter, map } from "rxjs";
import { AppEvent } from "./types/app-event.class";
import { EventBus } from "./types/event-bus.interface";

@Injectable()
export class EventBusService implements EventBus {
  private readonly subject = new Subject<AppEvent>();

  dispatch(event: AppEvent): void {
    this.subject.next(event);
  }

  on(eventType: typeof AppEvent): Observable<AppEvent> {
    return this.subject.asObservable().pipe(
      filter((event: AppEvent) => event && event.isEqual(eventType)),
      map(event => event),
    );
  }
}

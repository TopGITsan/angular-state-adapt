import { AppEvent } from './app-event.class';
import { Dispatcher } from './dispacher.interface';
import { Listener } from './listener.interface';

export interface EventBus extends Dispatcher<AppEvent>, Listener<AppEvent> {}

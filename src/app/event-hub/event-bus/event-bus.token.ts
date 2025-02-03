import { InjectionToken } from '@angular/core';
import { EventBus } from './types/event-bus.interface';

export const APPLICATION_BUS = new InjectionToken<EventBus>('APPLICATION_BUS');

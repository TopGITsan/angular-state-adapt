export abstract class AppEvent {
  public isEqual(eventType: typeof AppEvent): boolean {
    return this instanceof eventType;
  }
}
// export interface AppEvent<T, Type extends string = string> {
//   type: Type;
//   payload: T;
// }

// export function isEqualEvent<T, Type extends string = string>(
//   event: AppEvent<T, Type>,
//   eventType: typeof Event,
// ): boolean {
//   return event instanceof eventType;
// }

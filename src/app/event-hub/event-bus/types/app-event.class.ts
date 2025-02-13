export abstract class AppEvent {
  timestamp: number;

  constructor() {
    this.timestamp = new Date().getTime();
  }
  public isEqual(eventType: typeof AppEvent): boolean {
    return this instanceof eventType;
  }
}

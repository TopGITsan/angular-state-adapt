import {ComponentHarness} from '@angular/cdk/testing';

export class ApplicationScreen extends ComponentHarness {
  // Selector to the application's root element
  static hostSelector = 'app-root';

  // This would be a great place for some application-wide utilities,
  // for example access to modals or a log-out button
}

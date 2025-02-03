import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicationEventHandlerRegistryService } from './event-hub/application-event-handler-registry.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: ` <router-outlet /> `,
  styles: `
    :host {
      @apply h-full;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly applicationEventHandlerRegistryService = inject(
    ApplicationEventHandlerRegistryService,
  );
  constructor() {
    this.applicationEventHandlerRegistryService.init();
  }
}

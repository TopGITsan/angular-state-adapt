import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  template: ` <ng-content></ng-content> `,
  styles: `
    :host {
      @apply block w-full max-w-4xl m-auto p-4;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent {}

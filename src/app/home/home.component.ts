import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <div>
      <h1 class="text-clamp text-red-500 font-vibes">
        Hello!
      </h1>
    </div>
  `,
  styles: `
    :host {
      @apply flex justify-center items-center h-full;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}

import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-home',
  imports: [TitleCasePipe, TranslocoPipe],
  template: `
      <h1 class="text-clamp text-red-500 font-vibes">
        {{ 'hello' | transloco | titlecase }}!
      </h1>
  `,
  styles: `
    :host {
      @apply flex justify-center items-center h-full;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}

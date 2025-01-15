import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <div>
      <h1 class="text-3xl font-bold underline text-red-500">Hello!</h1>
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

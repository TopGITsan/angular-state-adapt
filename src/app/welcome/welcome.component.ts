import { AsyncPipe, NgClass, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { WelcomeStoreService } from './welcome-store.service';

@Component({
  selector: 'app-welcome',
  imports: [TitleCasePipe, TranslocoPipe, AsyncPipe, NgClass],
  template: `
    <h1
      class="text-clamp3 block-transparente-clip-text font-vibes"
      [ngClass]="lang$ | async"
    >
      {{ 'hello' | transloco | titlecase }}!
    </h1>
  `,
  styles: `
    :host {
      @apply flex justify-center items-center h-full;
    }
    .block-transparente-clip-text {
      -webkit-text-stroke: 1px var(--mat-sys-on-surface);
      @apply inline-block text-transparent bg-clip-text;
    }

    .null {
      @apply bg-gradient-to-r from-white via-red-400 to-white;
    }

    .it {
      background-image: linear-gradient(
        90deg,
        #009246 0 33.33%,
        #ffffff 33.33% 66.66%,
        #ce2b37 66.66% 100%
      );
    }
    .ro {
      background-image: linear-gradient(
        90deg,
        #002b7f 0 33.33%,
        #fcd116 33.33% 66.66%,
        #ce1126 66.66% 100%
      );
    }
    .fr {
      background-image: linear-gradient(
        90deg,
        #002395 0 33.33%,
        #ffffff 33.33% 66.66%,
        #ed2939 66.66% 100%
      );
    }

    .es {
      background-image: linear-gradient(
        180deg,
        #f21830 0 40%,
        #ffd90d 40% 60%,
        #f21830 60% 100%
      );
    }
    .de {
      background-image: linear-gradient(
        180deg,
        #000 0 40%,
        #ff0000 40% 60%,
        #ffcc00 60% 100%
      );
    }

    .en {
      background-color: #fff;
      background-image: linear-gradient(
          180deg,
          transparent,
          transparent 45%,
          #c8102e 45%,
          #c8102e 55%,
          transparent 55%,
          transparent 100%
        ),
        linear-gradient(
          90deg,
          transparent,
          transparent 40%,
          #c8102e 40%,
          #c8102e 60%,
          transparent 60%,
          transparent 100%
        );
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent {
  readonly lang$ = inject(WelcomeStoreService).selectedLanguage$;
}

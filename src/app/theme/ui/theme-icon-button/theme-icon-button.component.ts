import { nextThemeChange$ } from '@theme/theme.actions';
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { provideTranslocoScope, TranslocoDirective } from '@jsverse/transloco';
import { ThemeStoreService } from '@theme/theme-store/theme-store.service';
import { inlineLoader } from '@shared/i18n/inline-loader.function';
import { ThemeIconMap } from '../../theme.type';

@Component({
  selector: 'app-theme-icon-button',
  imports: [MatButtonModule, MatIconModule, AsyncPipe, TranslocoDirective],
  providers: [
    ThemeStoreService,
    provideTranslocoScope({
      scope: 'theme',
      loader: inlineLoader(
        (lang: string, folder: string) =>
          import(`../../${folder}/${lang}.json`),
      ),
    }),
  ],
  template: `
    @let theme = theme$ | async;
    <ng-container *transloco="let t">
      <button
        class="mx-2"
        mat-icon-button
        attr.aria-label="{{ t('theme.ariaLabel', { theme }) }}"
        title="{{ t('theme.title') }}"
        (click)="changeToNextTheme$.next()"
      >
        <mat-icon>{{ Theme[theme ?? ''] }}</mat-icon>
      </button>
    </ng-container>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeIconButtonComponent {
  readonly Theme = ThemeIconMap;

  readonly themeStore = inject(ThemeStoreService);
  readonly theme$ = this.themeStore.store.theme$
  readonly changeToNextTheme$ = nextThemeChange$;
}

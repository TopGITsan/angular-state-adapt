import { nextThemeChange$ } from '@actions/theme.actions';
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeStoreService } from '@theme/theme-store/theme-store.service';
import { Observable } from 'rxjs';
import { ThemeIconMap, ThemeKey } from '../../theme.type';

@Component({
  selector: 'app-theme-icon-button',
  imports: [MatButtonModule, MatIconModule, AsyncPipe],
  template: `
    @let theme = theme$ | async;
    <button
      class="mx-2"
      mat-icon-button
      [attr.aria-label]="'icon-button with icon ' + theme"
      title="Change theme"
      (click)="changeToNextTheme$.next()"
    >
      <mat-icon>{{ Theme[theme ?? ''] }}</mat-icon>
    </button>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeIconButtonComponent {
  readonly Theme = ThemeIconMap;

  readonly themeStore = inject(ThemeStoreService);
  readonly theme$ = this.themeStore.store
    .theme$ as Observable<unknown> as Observable<ThemeKey>;
  readonly changeToNextTheme$ = nextThemeChange$;
}

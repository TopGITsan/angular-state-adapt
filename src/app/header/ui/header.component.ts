import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Theme, themeButtonIcons, ThemeKey } from '../theme.type';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
    <mat-toolbar>
      <button
        mat-icon-button
        aria-label="icon-button with menu icon"
        (click)="openSidenav.emit()"
      >
        <mat-icon>menu</mat-icon>
      </button>
      <span>Ex App</span>
      <span class="flex-auto"></span>
      <a
        mat-icon-button
        class="mx-2"
        href="https://github.com/TopGITsan"
        title="https://github.com/TopGITsan"
        target="_blank"
        aria-label="GitHub Repository"
      >
        <svg viewBox="0 0 20 20" aria-hidden="true" class="w-6 h-6">
          <path
            d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0 0 10 0z"
            fill="currentColor"
            fill-rule="evenodd"
          ></path>
        </svg>
      </a>
      <button
        class="mx-2"
        mat-icon-button
        [attr.aria-label]="'icon-button with icon ' + theme()"
        title="Change theme"
        (click)="changeTheme.emit()"
      >
        <mat-icon>{{ Theme[theme()] }}</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: `
    :host {
      @apply block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly icons = themeButtonIcons;
  readonly Theme = Theme;
  readonly theme = input<ThemeKey>('os-default');
  readonly openSidenav = output<void>();
  readonly changeTheme = output<void>();
}
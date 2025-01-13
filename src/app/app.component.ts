import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/ui/header.component';
import { ThemeStoreService } from './store/theme-store/theme-store.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ThemeKey } from './header/theme.type';
import { nextThemeChange$ } from './actions/theme.actions';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavModule, HeaderComponent, AsyncPipe],
  template: `
    <app-header
      [theme]="theme$ | async"
      (changeTheme)="changeToNextTheme$.next()"
    />
    <mat-sidenav-container class="grow">
      <mat-sidenav mode="side" [opened]="openSidenav()"
        >Sidenav content</mat-sidenav
      >
      <mat-sidenav-content>
        <h1 class="text-3xl font-bold underline text-red-500">
          Hello, {{ title }}
        </h1>
        <p>Main content</p>
      </mat-sidenav-content>
    </mat-sidenav-container>

    <router-outlet />
  `,
  styles: `
    :host {
      @apply flex flex-col h-full;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly title = 'angular-state-adapt';
  readonly openSidenav = signal<boolean>(true);
  readonly themeStore = inject(ThemeStoreService);
  // TODO : remove assertion
  readonly theme$ = this.themeStore.store.theme$ as Observable<ThemeKey | null>;
  readonly changeToNextTheme$ = nextThemeChange$;
}

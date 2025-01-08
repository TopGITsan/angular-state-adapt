import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavModule, HeaderComponent],
  template: `
    <app-header />
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
}

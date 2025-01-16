import { toggleSidenavChange$ } from '@actions/sidenav.actions';
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { GlobalStoreService } from '@store/global-store.service';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavModule, HeaderComponent, AsyncPipe],
  template: `
    @let sidenavOpened = sidenavOpened$ | async;
    <app-header (openSidenav)="toggleSidenav$.next($event)" />
    <mat-sidenav-container class="grow">
      <mat-sidenav mode="side" [opened]="sidenavOpened"
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
  private readonly globalStore = inject(GlobalStoreService);
  readonly sidenavOpened$ = this.globalStore.store.isSidenavOpendState$;
  readonly toggleSidenav$ = toggleSidenavChange$;
}

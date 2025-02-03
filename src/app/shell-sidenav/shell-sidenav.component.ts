import {
  closeSidenavChange$,
  toggleSidenavChange$,
} from '@actions/sidenav.actions';
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { routeTransition } from '@shared/animations/route-transition.animation';
import { HeaderComponent } from '../header/header.component';
import { ShellSidenvStoreService } from './shell-sidenav-store/shell-sidenav.service';

@Component({
  selector: 'app-shell-sidenav',
  imports: [
    AsyncPipe,
    HeaderComponent,
    MatSidenavModule,
    RouterLink,
    RouterOutlet,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeTransition],
  template: `
    @let sidenavOpened = sidenavOpened$ | async;
    @let sidenavMode = (sidenavMode$ | async) ?? 'side';

    <app-header (openSidenav)="toggleSidenav$.next($event)" />
    <mat-sidenav-container class="grow">
      <mat-sidenav
        [mode]="sidenavMode"
        [opened]="sidenavOpened"
        (closed)="closeSidenav$.next()"
        class="p-8"
      >
        <p class="m-2">
          <a [routerLink]="'home'"> home </a>
        </p>
        <p class="m-2">
          <a [routerLink]="'about'"> about </a>
        </p>
      </mat-sidenav>
      <mat-sidenav-content [@routeTransition]="route.snapshot.data">
        <router-outlet />
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: `
    :host {
      @apply flex flex-col h-full;
    }
  `,
})
export class ShellSidenavComponent {
  private readonly shellSidenavStore = inject(ShellSidenvStoreService);
  protected readonly route = inject(ActivatedRoute);
  readonly sidenavOpened$ = this.shellSidenavStore.store.isSidenavOpendState$;
  readonly sidenavMode$ = this.shellSidenavStore.store.sidenavModeState$;
  readonly toggleSidenav$ = toggleSidenavChange$;
  readonly closeSidenav$ = closeSidenavChange$;
}

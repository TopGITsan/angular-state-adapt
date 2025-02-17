import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { routeTransition } from '@shared/animations/route-transition.animation';
import { HeaderComponent } from '../header/header.component';
import { ShellSidenvStoreService } from './shell-sidenav-store/shell-sidenav.service';
import { closeSidenavChange$, toggleSidenavChange$ } from './sidenav.actions';

@Component({
  selector: 'app-shell-sidenav',
  imports: [
    AsyncPipe,
    HeaderComponent,
    MatSidenavModule,
    RouterLink,
    RouterOutlet,
    TitleCasePipe,
    TranslocoPipe,
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
          <a [routerLink]="'home'"> {{ 'home' | transloco | titlecase }} </a>
        </p>
        <p class="m-2">
          <a [routerLink]="'about'"> {{ 'about' | transloco | titlecase }} </a>
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

import { toggleSidenavChange$ } from '@actions/sidenav.actions';
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { GlobalStoreService } from '@store/global-store.service';
import { HeaderComponent } from './header/header.component';
import { routeTransition } from '@shared/animations/route-transition.animation';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    HeaderComponent,
    AsyncPipe,
    RouterLink,
  ],
  template: `
    @let sidenavOpened = sidenavOpened$ | async;
    <app-header (openSidenav)="toggleSidenav$.next($event)" />
    <mat-sidenav-container class="grow">
      <mat-sidenav mode="side" [opened]="sidenavOpened">
        <a [routerLink]="'home'"> home </a>
        <a [routerLink]="'about'"> about </a>
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeTransition],
})
export class AppComponent {
  private readonly globalStore = inject(GlobalStoreService);
  protected readonly route = inject(ActivatedRoute);
  readonly sidenavOpened$ = this.globalStore.store.isSidenavOpendState$;
  readonly toggleSidenav$ = toggleSidenavChange$;
}

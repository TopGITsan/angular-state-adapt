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
})
export class AppComponent {
  private readonly globalStore = inject(GlobalStoreService);
  readonly sidenavOpened$ = this.globalStore.store.isSidenavOpendState$;
  readonly toggleSidenav$ = toggleSidenavChange$;
}

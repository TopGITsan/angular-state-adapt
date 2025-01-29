import { ABOUT_ROUTE } from '@about/about.route';
import { Routes } from '@angular/router';
import { WELCOME_ROUTE, welcomePath } from 'src/app/welcome/welcome.route';
import { ShellSidenvStoreService } from './shell-sidenav-store/shell-sidenav.service';
import { ShellSidenavComponent } from './shell-sidenav.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellSidenavComponent,
    providers: [ShellSidenvStoreService],
    children: [
      WELCOME_ROUTE,
      ABOUT_ROUTE,
      { path: '', redirectTo: `/${welcomePath}`, pathMatch: 'full' },
      { path: '**', redirectTo: `/${welcomePath}`, pathMatch: 'full' },
    ],
  },
];

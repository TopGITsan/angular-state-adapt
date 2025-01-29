import { ABOUT_ROUTE } from '@about/about.route';
import { Routes } from '@angular/router';
import { HOME_ROUTE, homePath } from '@home/home.route';
import { ShellSidenavComponent } from './shell-sidenav.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellSidenavComponent,
    children: [
      HOME_ROUTE,
      ABOUT_ROUTE,
      { path: '', redirectTo: `/${homePath}`, pathMatch: 'full' },
      { path: '**', redirectTo: `/${homePath}`, pathMatch: 'full' },
    ],
  },
];

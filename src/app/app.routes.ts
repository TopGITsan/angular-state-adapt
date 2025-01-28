import { ABOUT_ROUTE } from '@about/about.route';
import { HOME_ROUTE, homePath } from '@home/home.route';
import { Routes } from '@angular/router';

export const routes: Routes = [
  HOME_ROUTE,
  ABOUT_ROUTE,
  { path: '', redirectTo: `/${homePath}`, pathMatch: 'full' },
  { path: '**', redirectTo: `/${homePath}`, pathMatch: 'full' },
];

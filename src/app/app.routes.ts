import { ABOUT_ROUTE } from '@about/about.route';
import { Routes } from '@angular/router';
import { HomeComponent } from '@home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  ABOUT_ROUTE,
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

import { homePath } from '@home/home.route';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./shell-sidenav/shell-sidenav.routes').then((m) => m.routes),
  },
  { path: '', redirectTo: `/${homePath}`, pathMatch: 'full' },
  { path: '**', redirectTo: `/${homePath}`, pathMatch: 'full' },
];

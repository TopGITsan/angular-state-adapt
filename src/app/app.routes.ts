import { Routes } from '@angular/router';
import { welcomePath } from '@welcome/welcome.route';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./shell-sidenav/shell-sidenav.routes').then((m) => m.routes),
  },
  { path: '', redirectTo: `/${welcomePath}`, pathMatch: 'full' },
  { path: '**', redirectTo: `/${welcomePath}`, pathMatch: 'full' },
];

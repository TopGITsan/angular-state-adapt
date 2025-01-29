import { welcomePath } from 'src/app/welcome/welcome.route';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./shell-sidenav/shell-sidenav.routes').then((m) => m.routes),
  },
  { path: '', redirectTo: `/${welcomePath}`, pathMatch: 'full' },
  { path: '**', redirectTo: `/${welcomePath}`, pathMatch: 'full' },
];

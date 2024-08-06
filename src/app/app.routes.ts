import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'communities',
    loadChildren: () => import('./features/communities/communities.routes'),
  },
];

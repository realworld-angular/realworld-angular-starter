import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'communities',
    loadChildren: () => import('./features/communities/communities.routes'),
  },
  {
    path: 'events',
    loadChildren: () => import('./features/events/events.routes'),
  },
];

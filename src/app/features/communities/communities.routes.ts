import { Routes } from '@angular/router';

const COMMUNITIES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/community-list/community-list.component'),
  },
];

export default COMMUNITIES_ROUTES;

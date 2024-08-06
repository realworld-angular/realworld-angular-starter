import { Routes } from '@angular/router';

const EVENT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/event-list/event-list.component'),
  },
];

export default EVENT_ROUTES;

import { Routes } from '@angular/router';

const EventsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/event-list/event-list.component'),
  },
];

export default EventsRoutes;

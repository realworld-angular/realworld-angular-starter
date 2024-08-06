import { Routes } from '@angular/router';

const ABOUT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/about/about.component'),
  },
];

export default ABOUT_ROUTES;

import {APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {Meta} from "@angular/platform-browser";
import {environment} from "../environments/environment";

const initCsp = (meta: Meta) => {
  return () => meta.addTag({
    httpEquiv: 'Content-Security-Policy',
    content: environment.csp
  });
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initCsp,
      deps: [Meta],
      multi: true,
    }
  ]
};

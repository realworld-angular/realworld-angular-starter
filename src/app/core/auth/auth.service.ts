import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignupPayload } from './models/signup-payload.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly #http = inject(HttpClient);

  public signup(payload: SignupPayload): Observable<void> {
    return this.#http.post<void>('/auth/signup', payload);
  }
}

import {inject, Injectable} from '@angular/core';
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {TokenResponse} from "./auth.interface";
import {CookieService} from "ngx-cookie-service";
// import {ReactiveFormsModule} from "@angular/forms";
// import {Observable} from "rxjs";
// import {HttpClientModule} from "@angular/common/http";
// import {inject} from "@angular/core";
// import {HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  cookieService = inject(CookieService);
  baseApiUrl = 'http://127.0.0.1:8000/api/';

  token: string | null = null;
  refreshToken: string | null = null;

  get isAuthenticated(): boolean {
    if (!this.token) {
      this.token = this.cookieService.get('token');
    }
    return !!this.token
  }

  login(payload: {username: string, password: string}) {
    return this.http.post<TokenResponse>(
      `${this.baseApiUrl}token/`,
      payload,
      ).pipe(
        tap(val => {
          this.token = val.access_token
          this.refreshToken = val.refresh_token

          this.cookieService.set('token', this.token)
          this.cookieService.set('refreshToken', this.refreshToken)
        })
    )
  }
}

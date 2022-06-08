import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { SERVICE_ENDPOINT } from '../service.constants';

const USERNAME_COOKIE: string = 'username';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private _http: HttpClient,
    private _cookieService: CookieService
  ) {}

  public loginSuccess = (userName: string): Observable<Response> => {
    this._cookieService.set(USERNAME_COOKIE, userName);

    return this._http.get<Response>(SERVICE_ENDPOINT.LOGIN_SUCCESS);
  };

  public loginFail = (userName: string): Observable<Response> => {
    this._cookieService.set(USERNAME_COOKIE, userName);

    return this._http.get<Response>(SERVICE_ENDPOINT.LOGIN_FAIL);
  };
}

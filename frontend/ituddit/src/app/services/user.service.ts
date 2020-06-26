import { Injectable, APP_ID } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  backend = AppConfig.SERVER_BASE_URL;
  constructor(private http: HttpClient) {}

  registerUser(userData): Observable<any> {
    return this.http.post(
      this.backend + '/api/rest-auth/registration',
      userData
    );
  }

  userLoginService(userData): Observable<any> {
    let options = {
      withCredentials: true,
    };
    return this.http.post(
      this.backend + '/api/rest_auth/login/',
      userData,
      options
    );
  }

  userLogoutService(userData): Observable<any> {
    return this.http.get(this.backend + '/api/get-crfs/');
  }
}

import { Injectable, APP_ID } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  LOCAL_BACKEND = 'http://localhost:8000/';
  backend = this.LOCAL_BACKEND;
  constructor(private http: HttpClient) {}
  registerUser(userData): Observable<any> {
    return this.http.post(this.backend + 'api/user_register/', userData);
  }
}

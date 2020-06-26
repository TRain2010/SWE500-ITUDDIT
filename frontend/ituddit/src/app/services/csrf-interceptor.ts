import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService) {}
  getCookie(key: string) {
    return this.cookieService.get(key);
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const csrftoken = this.getCookie('csrftoken');
    const modifiedReq = req.clone({
      headers: req.headers.set('X-CSRFToken', csrftoken),
    });
    const authmodifiedReq = req.clone({
      headers: req.headers.set(
        'Authorization',
        'Token bdd62dad0fc2dcae85261ae1d276388138673119'
      ),
    });
    return next.handle(authmodifiedReq);
  }
}

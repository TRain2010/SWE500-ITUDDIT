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
    const bktoken = this.getCookie('bktoken')
      ? 'Token ' + this.getCookie('bktoken')
      : '';

    const authmodifiedReq = req.clone({
      headers: req.headers.set('Authorization', bktoken),
      // .set('X-CSRFToken', csrftoken),
    });
    return next.handle(authmodifiedReq);
  }
}

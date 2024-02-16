import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class apiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const authToken = localStorage.getItem('jwtToken');

    if (req.url.includes('/api/login') || req.url.includes('/api/signup')) {

      console.log('Singup or Login');
      req = req.clone({ responseType: 'text' });
      return next.handle(req);
      
    } else {
      if (authToken) {
        const authReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${authToken}`,
          },
          responseType: 'text',
        });
        return next.handle(authReq);
      }
      return next.handle(req);
    }
  }
}

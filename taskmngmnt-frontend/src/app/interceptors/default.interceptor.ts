import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class defaultInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService, private route: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = localStorage.getItem('jwtToken');

    if (authToken) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`,
        },
        responseType: 'text',
      });
      return next.handle(authReq).pipe(
        catchError((error) => {
          if (error.status === 401) {
            this.toastr.error('Unauthorized acceess');
            this.route.navigate(['/navigate']);
          }
          return throwError(error);
        })
      );
    }
    return next.handle(req);
  }
}

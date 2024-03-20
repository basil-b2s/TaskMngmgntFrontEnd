import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable()
export class authInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes('/api/signup') || req.url.includes('/api/login')) {
      req = req.clone({ responseType: 'text' });
      return next.handle(req).pipe(
        tap((event) => {
          if (req.url.includes('/api/signup')) {
            if (event instanceof HttpResponse) {
              this.toastr.success(
                'Your account has been created... Please login in'
              );
            }
          } else if (req.url.includes('/api/login')) {
            if (event instanceof HttpResponse) {
              this.toastr.success('Successfully Signed In');
            }
          }
        }),
        catchError((error) => {
          console.log(error.error);
          // if (error.error === 'Invalid credentials') {
          //   this.toastr.error('Invalid Credentials');
          // }
          this.toastr.error(error.error);
          return throwError(error);
        })
      );
    } else {
      return next.handle(req);
    }
  }
}

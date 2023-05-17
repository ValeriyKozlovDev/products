import { Store } from '@ngrx/store';
import { changeAccessFlag } from './../store/auth.actions';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpHeaders,

} from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService,
    private router: Router,
    private store: Store
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isAuthenticated()) {
      const token = localStorage.getItem('token');
      const clearToken = token?.replace(/"/g, '');
      const headers = new HttpHeaders({
        authorization: `${clearToken}`,
        'Content-Type': 'application/json',
      });
      const authReq = req.clone({ headers });
      return next.handle(authReq);
    }
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.warn('[Interceptor error]', error)
          if (error.status === 401) {
            this.store.dispatch(changeAccessFlag({ data: true }))
            this.auth.logout()
            this.router.navigate(['/auth'])
          }
          return throwError(error)
        })
      )
  }
}

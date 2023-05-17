import { Store } from '@ngrx/store';
import { changeAccessFlag } from './../store/auth.actions';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { catchError, Observable, tap, throwError } from "rxjs";
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _store: Store
  ) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this._auth.isAuthenticated()) {
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders({
        authorization: `${token}`,
        'Content-Type': 'application/json',
      })
      req = req.clone({ headers })
    }
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.warn('[Interceptor error]', error)
          if (error.status === 401) {
            this._store.dispatch(changeAccessFlag({ data: true }))
            this._auth.logout()
            this._router.navigate(['/auth'])
          }
          return throwError(error)
        })
      )
  }
}

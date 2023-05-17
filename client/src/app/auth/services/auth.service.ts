import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Store } from '@ngrx/store';
import { catchError, Observable, Subject, tap, throwError } from "rxjs";

import { IUser, AuthResponse } from '../store/interfaces';
import { setLoading } from '../store/auth.actions';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private store: Store) { }

  public error$: Subject<string> = new Subject<string>()

  get token(): any {
    const expDate = new Date(Number(localStorage.getItem('token-exp')))
    if (new Date() > expDate) {
      this.logout()
      return null
    }
    return localStorage.getItem('token')
  }

  public login(user: IUser): Observable<IUser | any> {
    return this.http.post(`${environment.baseUrl}/auth/login`, user)
      .pipe(
        tap(this._setToken),
        catchError(this._handleError.bind(this))
      )
  }

  public create(user: IUser): Observable<IUser | any> {
    user.returnSecureToken = true
    return this.http.post(`${environment.baseUrl}/auth/signup`, user)
      .pipe(
        catchError(this._handleError.bind(this))
      )
  }

  public logout() {
    this._setToken(null)
  }

  public isAuthenticated(): boolean {
    return !!this.token
  }

  private _handleError(error: HttpErrorResponse) {
    const { message } = error.error.error
    this.store.dispatch(setLoading({ data: false }))
    switch (message) {
      case 'INVALID_EMAIL':
        this.error$.next('Wrong email')
        break
      case 'INVALID_PASSWORD':
        this.error$.next('Wrong password')
        break
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Email not found')
        break
      case 'EMAIL_EXISTS':
        this.error$.next('Email already in use')
        break
      case 'OPERATION_NOT_ALLOWED':
        this.error$.next('Operation not allowed')
        break
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        this.error$.next('Too many attempts, please try later')
        break
    }
    return throwError(error)
  }


  private _setToken(response: AuthResponse | null | any) {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
      localStorage.setItem('token', response.token)
      localStorage.setItem('token-exp', expDate.toString())
    } else {
      localStorage.clear()
    }
  }
}

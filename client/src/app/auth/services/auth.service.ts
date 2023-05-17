import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Store } from '@ngrx/store';
import { catchError, Observable, Subject, tap, throwError } from "rxjs";

import { IUser, AuthResponse } from '../store/interfaces';
import { setLoading } from '../store/auth.actions';
import { environment } from "src/environments/environment";

@Injectable()
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

  login(user: IUser): Observable<IUser | any> {
    // user.returnSecureToken = true
    console.log(user)
    return this.http.post(`${environment.baseUrl}/auth/login`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      )
  }

  create(user: IUser): Observable<IUser | any> {
    user.returnSecureToken = true
    return this.http.post(`${environment.baseUrl}/auth/signup`, user)
      .pipe(
        catchError(this.handleError.bind(this))
      )
  }

  logout() {
    this.setToken(null)
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  handleError(error: HttpErrorResponse) {
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


  private setToken(response: AuthResponse | null | any) {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
      localStorage.setItem('token', response.idToken)
      localStorage.setItem('token-exp', expDate.toString())
    } else {
      localStorage.clear()
    }
  }
}

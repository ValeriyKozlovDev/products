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

  public login(user: IUser): Observable<IUser | any> {
    return this.http.post(`${environment.baseUrl}/auth/login`, user)
  }

  public create(user: IUser): Observable<IUser | any> {
    user.returnSecureToken = true
    return this.http.post(`${environment.baseUrl}/auth/signup`, user)
  }
}

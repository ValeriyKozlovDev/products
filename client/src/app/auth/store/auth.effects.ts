import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { login, loginOrRegisterFailure, loginOrRegisterSuccess, logout, register } from './auth.actions';
import { AuthService } from "../services/auth.service";
import { exhaustMap, map, tap, catchError, of } from "rxjs";
import { IUser } from './interfaces';
import jwtDecode from 'jwt-decode';
import { Store } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { resetProducts } from 'src/app/features/products/store/products.actions';
import { Router } from '@angular/router';

export const auth$ = createEffect(
  (
    actions$ = inject(Actions),
    authService: AuthService = inject(AuthService),
  ) =>
    actions$.pipe(
      ofType(login),
      exhaustMap(({ data }) => authService.login(data)),
      tap((token) => localStorage.setItem('token', token.token)),
      map(({ token }) => {
        const user: IUser = jwtDecode(token);
        return loginOrRegisterSuccess({ user, token });
      }),
    ),

  { functional: true },
)

export const loginOrRegisterSuccess$ = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) =>
    actions$.pipe(
      ofType(loginOrRegisterSuccess),
      tap(() => {
        if (router.url.includes('auth')) {
          router.navigateByUrl('/products');
        }
      }),
    ),
  { functional: true, dispatch: false },
);

export const register$ = createEffect(
  (
    actions$ = inject(Actions),
    authService: AuthService = inject(AuthService),
  ) =>
    actions$.pipe(
      ofType(register),
      exhaustMap(({ user }) => authService.create(user)),
      tap((token) => localStorage.setItem('token', token.token)),
      map(({ token }) => {
        const user: IUser = jwtDecode(token);
        return loginOrRegisterSuccess({ user, token });
      }),
      catchError((errorRes: HttpErrorResponse) =>
        of(loginOrRegisterFailure({ errors: errorRes.error?.errors })),
      ),
    ),
  { functional: true },
);

export const logout$ = createEffect(
  (
    actions$ = inject(Actions),
    router = inject(Router),
    store = inject(Store),
  ) =>
    actions$.pipe(
      ofType(logout),
      tap(() => {
        localStorage.clear();
        store.dispatch(resetProducts());
        router.navigate(['/auth']);
      }),
    ),
  { functional: true, dispatch: false },
);

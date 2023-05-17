// import { Actions, createEffect, ofType } from "@ngrx/effects";
// import { login } from './auth.actions';
// import { AuthService } from "../services/auth.service";
// import { exhaustMap, mergeMap } from "rxjs";

// export class AuthEffects {
//   login$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(login),
//       exhaustMap(({ user }) => this.authService.login(user)),
//     )
//   })



//   constructor(
//     private actions$: Actions,
//     private authService: AuthService,
//   ) { }
// }

// getAllProducts$ = createEffect(() => {
//   return this.actions$.pipe(
//     ofType(getAllProducts),
//     mergeMap(() =>
//       this.productsService.getAllProducts().pipe(
//         map((response) => {
//           return getAllProductsSuccess({
//             response,
//           });
//         }),
//         catchError((errorRes: HttpErrorResponse) =>
//           of(getAllProductsFailed({ error: errorRes.error?.errors })),
//         ),
//       ),
//     ),
//   );
// });

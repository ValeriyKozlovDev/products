import { getAllProducts, getAllProductsSuccess, getAllProductsFailed } from './products.actions';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';

import { ProductsService } from '../services/products.service';

@Injectable()
export class ProductsEffects {

  getAllProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getAllProducts),
      mergeMap(() =>
        this.productsService.getAllProducts().pipe(
          map((response) => {
            return getAllProductsSuccess({
              response,
            });
          }),
          catchError((errorRes: HttpErrorResponse) =>
            of(getAllProductsFailed({ error: errorRes.error?.errors })),
          ),
        ),
      ),
    );
  });


  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
  ) { }
}

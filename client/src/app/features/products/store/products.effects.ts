
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';

import { ProductsService } from '../services/products.service';
import {
  getAllProducts,
  getAllProductsSuccess,
  getAllProductsFailed,
  changeProductData,
  changeProductDataSuccess,
  changeProductDataFailed,
  createProduct,
  createProductFailed,
  createProductSuccess,
  deleteProduct,
  deleteProductSuccess,
  deleteProductFailed
} from './products.actions';
@Injectable({
  providedIn: 'root',
})
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

  createProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createProduct),
      mergeMap(({ data }) =>
        this.productsService.createProduct(data).pipe(
          map((response) => {
            return createProductSuccess({
              response,
            });
          }),
          catchError((errorRes: HttpErrorResponse) =>
            of(createProductFailed({ error: errorRes.error?.errors })),
          ),
        ),
      ),
    );
  });

  deleteProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteProduct),
      mergeMap(({ data }) =>
        this.productsService.deleteProduct(data).pipe(
          map((response) => {
            return deleteProductSuccess({
              response,
            });
          }),
          catchError((errorRes: HttpErrorResponse) =>
            of(deleteProductFailed({ error: errorRes.error?.errors })),
          ),
        ),
      ),
    );
  });

  changeProductData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(changeProductData),
      mergeMap(({ data }) =>
        this.productsService.changeProductData(data).pipe(
          map((response) => {
            return changeProductDataSuccess({
              response,
            });
          }),
          catchError((errorRes: HttpErrorResponse) =>
            of(changeProductDataFailed({ error: errorRes.error?.errors })),
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

import { inject } from '@angular/core';
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

export const getAllProducts$ = createEffect(
  (
    actions$ = inject(Actions),
    productsService: ProductsService = inject(ProductsService),
  ) =>
    actions$.pipe(
      ofType(getAllProducts),
      mergeMap(() =>
        productsService.getAllProducts().pipe(
          map((response) => {
            return getAllProductsSuccess({
              response,
            });
          }),
          catchError((errorRes: HttpErrorResponse) =>
            of(getAllProductsFailed({ error: errorRes.error?.errors })),
          ),
        ),
      )
    ),

  { functional: true },
)

export const createProduct$ = createEffect(
  (
    actions$ = inject(Actions),
    productsService: ProductsService = inject(ProductsService),
  ) =>
    actions$.pipe(
      ofType(createProduct),
      mergeMap(({ data }) =>
        productsService.createProduct(data).pipe(
          map((response) => {
            return createProductSuccess({
              response,
            });
          }),
          catchError((errorRes: HttpErrorResponse) =>
            of(createProductFailed({ error: errorRes.error?.errors })),
          ),
        ),
      )
    ),

  { functional: true },
)

export const deleteProduct$ = createEffect(
  (
    actions$ = inject(Actions),
    productsService: ProductsService = inject(ProductsService),
  ) =>
    actions$.pipe(
      ofType(deleteProduct),
      mergeMap(({ data }) =>
        productsService.deleteProduct(data).pipe(
          map((response) => {
            return deleteProductSuccess({
              response,
            });
          }),
          catchError((errorRes: HttpErrorResponse) =>
            of(deleteProductFailed({ error: errorRes.error?.errors })),
          ),
        ),
      )
    ),

  { functional: true },
)

export const changeProductData$ = createEffect(
  (
    actions$ = inject(Actions),
    productsService: ProductsService = inject(ProductsService),
  ) =>
    actions$.pipe(
      ofType(changeProductData),
      mergeMap(({ data }) =>
        productsService.changeProductData(data).pipe(
          map((response) => {
            return changeProductDataSuccess({
              response,
            });
          }),
          catchError((errorRes: HttpErrorResponse) =>
            of(changeProductDataFailed({ error: errorRes.error?.errors })),
          ),
        ),
      )
    ),

  { functional: true },
)

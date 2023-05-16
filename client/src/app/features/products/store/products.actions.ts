import { IProduct, IErrors } from './../interfaces/products.interfaces';
import { createAction, props } from '@ngrx/store';

import { ProfileActions } from './products.action.enum';

export const changeProductData = createAction(ProfileActions.CHANGE_PRODUCT_DATA);

export const changeProductDataSuccess = createAction(
  ProfileActions.CHANGE_PRODUCT_DATA_SUCCESS,
  props<{ response: IProduct }>(),
);

export const changeProductDataFailed = createAction(
  ProfileActions.CHANGE_PRODUCT_DATA_FAILED,
  props<{ error: IErrors }>(),
);

export const createProduct = createAction(
  ProfileActions.CREATE_PRODUCT,
  props<{ data: IProduct }>(),
);

export const createProductSuccess = createAction(
  ProfileActions.CREATE_PRODUCT_SUCCESS,
  props<{ response: IProduct }>(),
);

export const createProductFailed = createAction(
  ProfileActions.CREATE_PRODUCT_FAILED,
  props<{ error: IErrors }>(),
);

export const deleteProduct = createAction(
  ProfileActions.DELETE_PRODUCT,
  props<{ data: IProduct }>(),
);

export const deleteProductSuccess = createAction(
  ProfileActions.CREATE_PRODUCT_SUCCESS,
  props<{ response: IProduct }>(),
);

export const deleteProductFailed = createAction(
  ProfileActions.CREATE_PRODUCT_FAILED,
  props<{ error: IErrors }>(),
);

export const getAllProducts = createAction(
  ProfileActions.GET_ALL_PRODUCTS,
);

export const getAllProductsSuccess = createAction(
  ProfileActions.GET_ALL_PRODUCTS_SUCCESS,
  props<{ response: IProduct[] }>(),
);

export const getAllProductsFailed = createAction(
  ProfileActions.GET_ALL_PRODUCTS_FAILED,
  props<{ error: IErrors }>(),
);

export const getFullProduct = createAction(
  ProfileActions.GET_FULL_PRODUCT,
  props<{ data: IProduct }>(),
);

export const getFullProductSuccess = createAction(
  ProfileActions.GET_FULL_PRODUCT_SUCCESS,
  props<{ response: IProduct }>(),
);

export const getFullProductFailed = createAction(
  ProfileActions.GET_FULL_PRODUCT_FAILED,
  props<{ error: IErrors }>(),
);

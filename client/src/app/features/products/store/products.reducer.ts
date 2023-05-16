import { createReducer, on, createFeature } from '@ngrx/store';

import { IProductsState } from './products.state.interfaces';
import {
  changeProductData,
  changeProductDataFailed,
  changeProductDataSuccess,
  createProduct,
  createProductFailed,
  createProductSuccess,
  deleteProduct,
  deleteProductFailed,
  deleteProductSuccess,
  getAllProducts,
  getAllProductsFailed,
  getAllProductsSuccess,
} from './products.actions';

export const products = 'products';

export const productsInitialState: IProductsState = {
  isLoading: false,
  products: [],
  product: null,
  error: null,
};

export const ProductsFeature = createFeature({
  name: products,
  reducer: createReducer(
    productsInitialState,
    on(getAllProducts, (state: IProductsState) => ({
      ...state,
      error: null,
      isLoading: true,
    })),
    on(getAllProductsSuccess, (state: IProductsState, { response }) => ({
      ...state,
      products: response,
      isLoading: false,
    })),
    on(getAllProductsFailed, (state: IProductsState, { error }) => ({
      ...state,
      error: error,
      isLoading: false,
    })),

    on(changeProductData, (state: IProductsState) => ({
      ...state,
      error: null,
      isLoading: true,
    })),
    on(changeProductDataSuccess, (state: IProductsState, { response }) => ({
      ...state,
      product: response,
      isLoading: false,
    })),
    on(changeProductDataFailed, (state: IProductsState, { error }) => ({
      ...state,
      error: error,
      isLoading: false,
    })),

    on(createProduct, (state: IProductsState) => ({
      ...state,
      error: null,
      isLoading: true,
    })),
    on(createProductSuccess, (state: IProductsState, { response }) => ({
      ...state,
      product: response,
      isLoading: false,
    })),
    on(createProductFailed, (state: IProductsState, { error }) => ({
      ...state,
      error: error,
      isLoading: false,
    })),

    on(deleteProduct, (state: IProductsState) => ({
      ...state,
      error: null,
      isLoading: true,
    })),
    on(deleteProductSuccess, (state: IProductsState, { response }) => ({
      ...state,
      product: response,
      isLoading: false,
    })),
    on(deleteProductFailed, (state: IProductsState, { error }) => ({
      ...state,
      error: error,
      isLoading: false,
    })),
  ),
});

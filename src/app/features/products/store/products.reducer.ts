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
  getFullProduct,
  resetProducts,
} from './products.actions';
import { IProduct } from '../interfaces/products.interfaces';

export const products = 'products';

export const productsInitialState: IProductsState = {
  isLoading: false,
  products: [],
  product: {
    name: '',
    description: '',
    image: '',
    id: 0,
    price: 0
  },
  error: null,
};

export const ProductsFeature = createFeature({
  name: products,
  reducer: createReducer(
    productsInitialState,
    on(getFullProduct, (state: IProductsState, { id }) => ({
      ...state,
      product: (state.products.find(product => product.id == id)) as IProduct
    })),
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
      products: [...state.products, response],
      product: response,
      isLoading: false,
    })),
    on(createProductFailed, (state: IProductsState, { error }) => ({
      ...state,
      error: error,
      isLoading: false,
    })),

    on(deleteProduct, (state: IProductsState, { data }) => ({
      ...state,
      product: (state.products.find((product) => product.id == data)) as IProduct,
      error: null,
      isLoading: true,
    })),
    on(deleteProductSuccess, (state: IProductsState, { response }) => ({
      ...state,
      products: state.products.filter((product) => product.id != state.product.id),
      isLoading: false,
    })),
    on(deleteProductFailed, (state: IProductsState, { error }) => ({
      ...state,
      error: error,
      isLoading: false,
    })),
    on(resetProducts, (state: IProductsState) => ({
      ...state,
      products: [],
      product: {
        name: '',
        description: '',
        image: '',
        id: 0,
        price: 0
      }
    })),
  ),
});

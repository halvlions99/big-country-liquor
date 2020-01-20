import { Product } from 'src/app/core/store/liquor-store-interfaces';
import { createReducer, on, Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductActions } from '../actions';
import * as fromRoot from '../../../../app/core/store/app.reducer';
import * as fromJoke from './joke.reducer';

export const productFeatureKey = 'product';

export interface ProductState {
  products: Product[];
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string | null;
}

export const initialProductState: ProductState = {
  products: [],
  isLoading: false,
  hasError: false,
  errorMessage: null
};

export interface State extends fromRoot.State {
  [productFeatureKey]: ProductState;
  [fromJoke.jokeFeatureKey]: fromJoke.JokeState;
}

export const productReducer = createReducer(
  initialProductState,
  on(ProductActions.loadProducts, state => ({
    ...state,
    isLoading: true
  })),
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    isLoading: false,
    products
  })),
  on(ProductActions.addProduct, (state, { product }) => {
      const productList = state.products ? [...state.products] : [];
      productList.push(product);
      return { ...state, products: productList };
    }
  ),
  on(ProductActions.removeProduct, (state, { productId }) => {
      const productList = state.products.filter(product => product.ProductId !== productId);
      return { ...state, products: productList };
    }
  )
);

export function reducers(state: State | undefined, action: Action) {
  return combineReducers({
    [productFeatureKey]: productReducer,
    [fromJoke.jokeFeatureKey]: fromJoke.jokeReducer,
  })(state, action);
}

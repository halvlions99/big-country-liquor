import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productFeatureKey, State } from '../reducers/product.reducer';

export const selectProductState = createFeatureSelector<State>(
  productFeatureKey
);

export const getProducts = createSelector(
  selectProductState,
  (state: State) => state.product.products
);

export const getProductsLoading = createSelector(
  selectProductState,
  (state: State) => state.product.isLoading
);

export const getJokeLoading = createSelector(
  selectProductState,
  (state: State) => state.joke.isLoading
);

export const getJoke = createSelector(
  selectProductState,
  (state: State) => state.joke.joke
);


import { createAction, props } from '@ngrx/store';
import { Product } from '../../../core/store/liquor-store-interfaces';
import { Guid } from 'guid-typescript';

/**
 * Load Products
 */
export const loadProducts = createAction('[Inventory Container] Load Products');

/**
 * Load Products Success
 */
export const loadProductsSuccess = createAction(
  '[Inventory Container] Load Products Success',
  props<{ products: Product[] }>()
);

/**
 * Save product to collection.
 */
export const addProduct = createAction(
  '[Inventory Container] Add Product Dialog Save',
  props<{ product: Product }>()
);

/**
 * Remove product from collection.
 */
export const removeProduct = createAction(
  '[Inventory Component] Remove Product Clicked',
  props<{ productId: string }>()
);

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import { ProductActions } from '../actions';
import { Product, ProductType } from '../../../core/store/liquor-store-interfaces';
import { Guid } from 'guid-typescript';

@Injectable()
export class ProductEffects {

  initialLoadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      map(() => {
        return ProductActions.loadProductsSuccess({ products: this.mockProducts() });
      })
    )
  );

  constructor(
    private actions$: Actions
  ) {}

  private mockProducts(): Product[] {
    return [
      {
        ProductId: Guid.create().toString(),
        ProductType: ProductType.Wine,
        ProductName: 'Kendal Jackson',
        ProductPrice: 14.99
      },
      {
        ProductId: Guid.create().toString(),
        ProductType: ProductType.Beer,
        ProductName: 'Boulevard Pale Ale',
        ProductPrice: 7.99
      },
      {
        ProductId: Guid.create().toString(),
        ProductType: ProductType.Liquor,
        ProductName: 'Jack Daniels',
        ProductPrice: 17.99
      }
    ];
  }

}

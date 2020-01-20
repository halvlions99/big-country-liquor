import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { take, reduce, map } from 'rxjs/operators';

import { Product } from '../../../../core/store/liquor-store-interfaces';
import { ProductDialogComponent } from '../../../../shared/dialogs/product-dialog/product-dialog.component';
import { ProductActions, JokeActions } from '../../../store/actions';
import { ProductReducers } from '../../../store/reducers';
import { ProductSelectors } from '../../../store/selectors';

@Component({
  selector: 'app-bcs-ngrx-inventory-container',
  templateUrl: './bcs-ngrx-inventory-container.component.html',
  styleUrls: ['./bcs-ngrx-inventory-container.component.scss']
})
export class BcsNgrxInventoryContainerComponent implements OnInit {
  products$: Observable<Product[]>;
  isLoading$: Observable<boolean>;
  joke$: Observable<string>;
  isJokeLoading$: Observable<boolean>;
  productsTotal$: Observable<number>;

  constructor(
    private store: Store<ProductReducers.State>,
    private dialog: MatDialog
  ) {
    this.isLoading$ = store.pipe(select(ProductSelectors.getProductsLoading));
    this.products$ = store.pipe(select(ProductSelectors.getProducts));
    this.joke$ = store.pipe(select(ProductSelectors.getJoke));
    this.isJokeLoading$ = store.pipe(select(ProductSelectors.getJokeLoading));
  }

  ngOnInit() {
    this.store.dispatch(ProductActions.loadProducts());
  }

  addAlcohol(): void {
    this.dialog
      .open(ProductDialogComponent, {
        data: null
      })
      .afterClosed()
      .pipe(take(1))
      .subscribe(productData => {
        if (productData) {
          this.store.dispatch(
            ProductActions.addProduct({
              product: {
                ProductType: productData.productType,
                ProductName: productData.productName,
                ProductPrice: productData.productPrice,
                ProductId: Guid.create().toString()
              }
            })
          );
        }
      });
  }

  deleteProduct(productGuidId: string): void {
    this.store.dispatch(ProductActions.removeProduct({ productId: productGuidId }));
  }

  getJoke(): void {
    this.store.dispatch(JokeActions.getJoke());
  }
}

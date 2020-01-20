import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Product } from 'src/app/core/store/liquor-store-interfaces';
import { BigCountryStoreService } from 'src/app/service-store/store/bcs-subject-store.service';
import { ProductDialogComponent } from 'src/app/shared/dialogs/product-dialog/product-dialog.component';

@Component({
  selector: 'app-bcs-subject-inventory-container',
  templateUrl: './bcs-subject-inventory-container.component.html',
  styleUrls: ['./bcs-subject-inventory-container.component.scss']
})
export class BcsSubjectInventoryContainerComponent implements OnInit {

  products$: Observable<Product[]>;
  isLoading$: Observable<boolean>;
  joke$: Observable<string>;

  constructor(private bigCountryStoreService: BigCountryStoreService, private dialog: MatDialog) { }

  ngOnInit() {
    this.products$ = this.bigCountryStoreService.products$;
    this.isLoading$ = this.bigCountryStoreService.isLoading$;
    this.joke$ = this.bigCountryStoreService.chuckNorrisJoke$;
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
          this.bigCountryStoreService.addProduct({
            ProductType: productData.productType,
            ProductName: productData.productName,
            ProductPrice: productData.productPrice,
            ProductId: Guid.create().toString()
          });
        }
      });
  }

  deleteProduct(productId: string): void {
    this.bigCountryStoreService.removeProduct(productId);
  }

  getJoke(): void {
    this.bigCountryStoreService.getChuckyJoke();
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/core/store/liquor-store-interfaces';

@Component({
  selector: 'app-bcs-ngrx-products',
  templateUrl: './bcs-ngrx-products.component.html',
  styleUrls: ['./bcs-ngrx-products.component.scss']
})
export class BcsNgrxProductsComponent implements OnInit {
  @Input() products: Product[] = [];
  @Output() emitDeleteProduct: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  deleteAlcohol(product: Product): void {
    this.emitDeleteProduct.emit(product.ProductId);
  }
}

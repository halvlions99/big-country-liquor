import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Product } from 'src/app/core/store/liquor-store-interfaces';

@Component({
  selector: 'app-bcs-subject-products',
  templateUrl: './bcs-subject-products.component.html',
  styleUrls: ['./bcs-subject-products.component.scss']
})
export class BcsSubjectProductsComponent implements OnInit {
  @Input() products: Product[] = [];
  @Output() emitDeleteProduct: EventEmitter<Guid> = new EventEmitter<Guid>();

  constructor() { }

  ngOnInit() {
  }

  deleteAlcohol(product: Product): void {
    this.emitDeleteProduct.emit(product.ProductId);
  }

}

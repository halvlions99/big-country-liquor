import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/store/liquor-store-interfaces';

@Component({
  selector: 'app-bcs-subject-products',
  templateUrl: './bcs-subject-products.component.html',
  styleUrls: ['./bcs-subject-products.component.scss']
})
export class BcsSubjectProductsComponent implements OnInit {
  @Input() products: Product[] = [];

  constructor() { }

  ngOnInit() {
  }

}

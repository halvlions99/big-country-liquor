import { Component, OnInit } from '@angular/core';
import { BigCountryStoreService } from 'src/app/service-store/store/bcs-subject-store.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/store/liquor-store-interfaces';

@Component({
  selector: 'app-bcs-subject-inventory-container',
  templateUrl: './bcs-subject-inventory-container.component.html',
  styleUrls: ['./bcs-subject-inventory-container.component.scss']
})
export class BcsSubjectInventoryContainerComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private bigCountryStoreService: BigCountryStoreService) { }

  ngOnInit() {
    this.products$ = this.bigCountryStoreService.products$;
  }

}

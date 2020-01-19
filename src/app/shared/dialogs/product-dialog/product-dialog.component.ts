import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductType } from 'src/app/core/store/liquor-store-interfaces';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})
export class ProductDialogComponent implements OnInit {
  productForm: FormGroup;
  productValueOptions = Object.keys(ProductType);

  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit() {
    this.productForm = new FormGroup({
      productType: new FormControl(''),
      productName: new FormControl(''),
      productPrice: new FormControl('')
    });
  }

  numberOnly(event) {
    const input = String.fromCharCode(event.charCode);
    const reg = /^\d*(?:[.,]\d{1,2})?$/;

    if (!reg.test(input)) {
      event.preventDefault();
    }
  }

  close() {
    this.dialogRef.close(null);
  }

  save() {
    this.dialogRef.close(this.productForm.value);
  }

}

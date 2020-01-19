import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppStoreModule } from './core/store/app-store.module';
import { SharedModule } from './shared/shared.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BigCountryStoreComponent } from './service-store/big-country-store/bcs-subject-landing/big-country-store.component';
import { BigCountryStoreNgrxComponent } from './ngrx/big-country-store-ngrx/bcs-ngrx-landing/big-country-store-ngrx.component';
// tslint:disable-next-line:max-line-length
import { BcsSubjectInventoryContainerComponent } from './service-store/big-country-store/bcs-subject-inventory/containers/bcs-subject-inventory-container.component';
// tslint:disable-next-line:max-line-length
import { BcsSubjectProductsComponent } from './service-store/big-country-store/bcs-subject-inventory/components/bcs-subject-products.component';
import { ProductDialogComponent } from './shared/dialogs/product-dialog/product-dialog.component';
import { TwoDigitDecimaNumberDirective } from './shared/directives/two_digit_decima_number.directive';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BigCountryStoreComponent,
    BigCountryStoreNgrxComponent,
    BcsSubjectInventoryContainerComponent,
    BcsSubjectProductsComponent,
    ProductDialogComponent,
    TwoDigitDecimaNumberDirective
  ],
  imports: [
    AppStoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  entryComponents: [ProductDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

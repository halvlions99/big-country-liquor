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
import { BcsSubjectInventoryContainerComponent } from './service-store/big-country-store/bcs-subject-inventory/containers/bcs-subject-inventory-container.component';
import { BcsSubjectProductsComponent } from './service-store/big-country-store/bcs-subject-inventory/components/bcs-subject-products.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BigCountryStoreComponent,
    BigCountryStoreNgrxComponent,
    BcsSubjectInventoryContainerComponent,
    BcsSubjectProductsComponent
  ],
  imports: [
    AppStoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

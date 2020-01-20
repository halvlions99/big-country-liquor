import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureLayoutComponent } from './shared/app-layouts/secure-main-layout/containers/layout/secure-layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BigCountryStoreNgrxComponent } from './ngrx/big-country-store-ngrx/bcs-ngrx-landing/big-country-store-ngrx.component';
import { BigCountryStoreComponent } from './service-store/big-country-store/bcs-subject-landing/big-country-store.component';
// tslint:disable-next-line:max-line-length
import { BcsSubjectInventoryContainerComponent } from './service-store/big-country-store/bcs-subject-inventory/containers/bcs-subject-inventory-container.component';
// tslint:disable-next-line:max-line-length
import { BcsNgrxInventoryContainerComponent } from './ngrx/big-country-store-ngrx/bcs-ngrx-inventory/containers/bcs-ngrx-inventory-container.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SecureLayoutComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent,
      }
    ]
  },
  {
    path: 'ngrx',
    component: SecureLayoutComponent,
    children: [{ path: '', component: BigCountryStoreNgrxComponent }]
  },
  {
    path: 'ngrx-inventory',
    component: SecureLayoutComponent,
    children: [{ path: '', component: BcsNgrxInventoryContainerComponent }]
  },
  {
    path: 'subject',
    component: SecureLayoutComponent,
    children: [{ path: '', component: BigCountryStoreComponent }]
  },
  {
    path: 'subject-inventory',
    component: SecureLayoutComponent,
    children: [{ path: '', component: BcsSubjectInventoryContainerComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

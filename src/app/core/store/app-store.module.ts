import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ROOT_REDUCERS, metaReducers } from './app.reducer';
import { ProductReducers } from 'src/app/ngrx/store/reducers';
import { ProductEffects } from 'src/app/ngrx/store/effects/product.effects';

// IMPORT EFFECTS
const effects = [
  ProductEffects
];

// IMPORT SERVICES
const services = [
];

// IMPORT STORES
const stores = [
];

@NgModule({
  imports: [
    RouterModule,
    HttpClientModule,
    StoreModule.forFeature(ProductReducers.productFeatureKey, ProductReducers.reducers),
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),
    StoreDevtoolsModule.instrument({ maxAge: 100 }),
    EffectsModule.forRoot([...effects])
  ],
  providers: [...services, ...stores],
  exports: [RouterModule]
})
export class AppStoreModule {}

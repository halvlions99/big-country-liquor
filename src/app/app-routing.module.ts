import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureLayoutComponent } from './shared/app-layouts/secure-main-layout/containers/layout/secure-layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

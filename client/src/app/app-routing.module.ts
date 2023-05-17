import { AuthGuard } from './auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: '/auth', pathMatch: 'full' },

  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/products.component').then(
        (module) => module.ProductsComponent,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'product/:productId',
    loadComponent: () =>
      import('./features/product-page/product-page.component').then(
        (module) => module.ProductPageComponent,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./auth/auth.component').then(
        (module) => module.AuthComponent,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

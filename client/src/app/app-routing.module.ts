import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./features/products/products.module').then(
        (module) => module.ProductsModule,
      ),
    // canActivate: [AuthGuard],
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./features/product-page/product-page.module').then(
        (module) => module.ProductPageModule,
      ),
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

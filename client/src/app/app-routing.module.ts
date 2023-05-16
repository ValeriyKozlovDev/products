import { AuthGuard } from './auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: '/auth', pathMatch: 'full' },

  {
    path: 'products',
    loadChildren: () =>
      import('./features/products/products.module').then(
        (module) => module.ProductsModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./features/product-page/product-page.module').then(
        (module) => module.ProductPageModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(
        (module) => module.AuthModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

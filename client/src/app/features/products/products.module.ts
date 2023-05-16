import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    ProductsRoutingModule,
    CommonModule,
    SharedModule,
    ProductComponent,
    RouterModule,
  ]
})
export class ProductsModule { }

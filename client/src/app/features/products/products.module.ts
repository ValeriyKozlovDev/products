import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../../shared/shared.module';

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

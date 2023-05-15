import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';

import { SharedModule } from '../../shared/shared.module';
import { ProductPageRoutingModule } from './product-page-routing.module';

@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductPageRoutingModule,
  ]
})
export class ProductPageModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';

import { SharedModule } from '../../shared/shared.module';
import { ProductPageRoutingModule } from './product-page-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from '../products/store/products.effects';
import { ProductsFeature } from '../products/store/products.reducer';
@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductPageRoutingModule,
    StoreModule.forFeature(ProductsFeature),
    EffectsModule.forFeature([ProductsEffects]),
  ]
})
export class ProductPageModule { }

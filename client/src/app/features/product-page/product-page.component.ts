import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { EditComponent } from '../../shared/edit/edit.component';
import { IProduct } from '../products/interfaces/products.interfaces';
import { ProductsFeature } from '../products/store/products.reducer';
import { getFullProduct } from '../products/store/products.actions';

@Component({
  standalone: true,
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  imports: [
    CommonModule,
    SharedModule,
    EditComponent,
  ]
})
export class ProductPageComponent {
  public product$: Observable<IProduct> = this._store.select(ProductsFeature.selectProduct)
  product = {
    name: 'name1',
    description: 'alkfmsdkskdmgopsdmgksdms oksdgm ksgksod msdklsgdl mskldm',
    price: 1,
    image: 'https://pcshop.ua/image/cache/catalog/tovar/29408_2-1024x768.jpg',
  }
  constructor(
    private _store: Store,
    private router: Router,
  ) { }

  ngOnInit() {
    this._store.dispatch(getFullProduct({ id: +(this.router.url.split('/'))[2] }))
  }
}


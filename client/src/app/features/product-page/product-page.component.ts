import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SharedModule } from '../../shared/shared.module';
import { EditComponent } from '../../shared/edit/edit.component';
import { IProduct } from '../products/interfaces/products.interfaces';
import { ProductsFeature } from '../products/store/products.reducer';
import { getAllProducts, getFullProduct } from '../products/store/products.actions';

@Component({
  standalone: true,
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  imports: [
    CommonModule,
    SharedModule,
    EditComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPageComponent implements OnInit {
  public product$: Observable<IProduct> = this._store.select(ProductsFeature.selectProduct)
  constructor(
    private _store: Store,
    private _router: Router,
  ) { }

  public ngOnInit() {
    this._store.dispatch(getFullProduct({ id: +(this._router.url.split('/'))[2] }))
  }
}


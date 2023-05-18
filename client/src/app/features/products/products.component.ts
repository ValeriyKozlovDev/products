import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ProductsFeature } from './store/products.reducer';
import { deleteProduct, getAllProducts } from './store/products.actions';
import { IProduct } from './interfaces/products.interfaces';
import { SharedModule } from '../../shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { EditComponent } from '../../shared/edit/edit.component';

@Component({
  standalone: true,
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [
    CommonModule,
    SharedModule,
    ProductComponent,
    EditComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  public products$: Observable<IProduct[]> = this._store.select(ProductsFeature.selectProducts)
  constructor(private _store: Store) { }

  public ngOnInit() {
    this._store.dispatch(getAllProducts())
  }

  public deleteProduct(id: number) {
    this._store.dispatch(deleteProduct({ data: id }))
  }
}

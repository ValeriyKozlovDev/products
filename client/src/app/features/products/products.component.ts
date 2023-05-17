import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ProductsFeature } from './store/products.reducer';
import { deleteProduct, getAllProducts } from './store/products.actions';
import { IProduct } from './interfaces/products.interfaces';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { EditComponent } from 'src/app/shared/edit/edit.component';

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
})
export class ProductsComponent {
  public products$: Observable<IProduct[]> = this._store.select(ProductsFeature.selectProducts)
  constructor(private _store: Store) { }

  ngOnInit() {
    this._store.dispatch(getAllProducts())
  }
  deleteProduct(id: number) {
    this._store.dispatch(deleteProduct({ data: id }))
  }
}

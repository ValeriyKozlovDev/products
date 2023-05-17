import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { SharedModule } from '../shared.module';
import { changeProductData, createProduct } from '../../features/products/store/products.actions';
import { IProduct } from '../../features/products/interfaces/products.interfaces';
import { TextInputComponent } from '../text-input/text-input.component';

@Component({
  standalone: true,
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  imports: [SharedModule, CommonModule, TextInputComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {
  @Input() product: IProduct
  public editForm: FormGroup
  constructor(private _store: Store) { }

  public ngOnInit() {
    this._initForm()
  }

  private _initForm() {
    if (this.product) {
      this.editForm = new FormGroup({
        name: new FormControl(this.product.name, [Validators.required]),
        description: new FormControl(this.product.description),
        price: new FormControl(this.product.price, [Validators.required]),
        image: new FormControl(this.product.image),
      });
    } else {
      this.editForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl(''),
        price: new FormControl('', [Validators.required]),
        image: new FormControl(''),
      });
    }
  }

  public submitForm() {
    if (this.editForm.invalid) {
      return
    }
    if (this.product) {
      const newProduct: IProduct = {
        ...this.product,
        name: this.editForm.value.name,
        description: this.editForm.value.description,
        price: this.editForm.value.price,
        image: this.editForm.value.image,
      }

      this._store.dispatch(changeProductData({ data: newProduct }))
    } else {
      const newProduct: IProduct = {
        name: this.editForm.value.name,
        description: this.editForm.value.description,
        price: this.editForm.value.price,
        image: this.editForm.value.image,
      }

      this._store.dispatch(createProduct({ data: newProduct }))
    }
  }
}

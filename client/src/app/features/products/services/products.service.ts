import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IProduct } from '../interfaces/products.interfaces';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) { }


  public getAllProducts(): Observable<IProduct[]> {
    const url = `${environment.baseUrl}/products`;
    return this.http.get<IProduct[]>(url);
  }

  public changeProductData(product: IProduct): Observable<IProduct> {
    const url = `${environment.baseUrl}/products/${product.id}`;
    return this.http.put<IProduct>(url, product);
  }

  public createProduct(product: IProduct): Observable<IProduct> {
    const url = `${environment.baseUrl}/products`;
    return this.http.post<IProduct>(url, product);
  }

  public deleteProduct(id: number): Observable<string> {
    const url = `${environment.baseUrl}/products/${id}`;
    return this.http.delete<string>(url);
  }
}

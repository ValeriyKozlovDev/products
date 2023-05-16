import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/products.interfaces';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) { }


  public getAllProducts(): Observable<IProduct[]> {
    const url = `http://localhost:5000/products`;
    return this.http.get<IProduct[]>(url);
  }
}

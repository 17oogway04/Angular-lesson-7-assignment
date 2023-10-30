import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  dataSource: string = "http://localhost:3000/products"
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.dataSource);
  }

  getProductbyID(id: number): Observable<Product>{
    return this.http.get<Product>(this.dataSource + "/" + id);
  }

  createNewProduct(newProduct: Product): Observable<Product>{
    return this.http.post<Product>(this.dataSource, newProduct);
  }

  editProductByID(id: number, edittedProduct: Product): Observable<Product>{
    return this.http.put<Product>(this.dataSource + "/" + id, edittedProduct);
  }

  deleteProductByID(id: number): Observable<any>{
    return this.http.delete<any>(this.dataSource + "/" + id)
  }
}

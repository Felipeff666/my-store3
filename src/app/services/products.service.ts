import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL:string='https://fakestoreapi.com/products';
  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get<Product[]>(this.URL);
  }
}

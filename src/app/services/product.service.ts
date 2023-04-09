import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('assets/data.json');
  }

  getProduct(id: number): Product | null {
    this.getProducts().subscribe((data) => {
      data.forEach((product) => {
        product.amount = 1;
      });
      this.products = data;
    });

    const product: Product | undefined = this.products.find(
      (product) => product.id === id
    );
    return product ? product : null;
  }
}

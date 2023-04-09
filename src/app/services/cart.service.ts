import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: Product[] = [];

  constructor() {}

  addToCart(product: Product): void {
    this.cartList.push(product);
  }

  deleteFromCart(product: Product): void {
    this.cartList = this.cartList.filter((cart) => cart.id !== product.id);
  }

  getCartList(): Product[] {
    return this.cartList;
  }

  clearCartList(): void {
    this.cartList = [];
  }
}

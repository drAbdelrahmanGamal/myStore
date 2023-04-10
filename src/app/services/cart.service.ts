import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: Product[] = [];

  constructor() {}

  addToCart(product: Product): boolean {
    if (this.cartList.filter((cart) => cart.id === product.id).length > 0)
      return false;
    this.cartList.push(product);
    return true;
  }

  deleteFromCart(product: Product): Product[] {
    return (this.cartList = this.cartList.filter(
      (cart) => cart.id !== product.id
    ));
  }

  getCartList(): Product[] {
    return this.cartList;
  }

  clearCartList(): void {
    this.cartList = [];
  }
}

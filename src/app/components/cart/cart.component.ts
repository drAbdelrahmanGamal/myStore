import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartList: Product[] = [];
  totalAmount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartList = this.cartService.getCartList();
    this.updateTotalAmount();
  }

  updateCartAmount(cart: Product): void {
    if (cart.amount <= 0) this.cartList = this.cartService.deleteFromCart(cart);
    this.updateTotalAmount();
  }

  updateTotalAmount(): void {
    this.totalAmount = 0;
    this.cartList.map((cart) => (this.totalAmount += cart.price * cart.amount));
  }
}

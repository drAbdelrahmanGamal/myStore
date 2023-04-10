import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  user: User = new User();
  cartList: Product[] = [];
  totalAmount: number = 0;
  confirmed: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartList = this.cartService.getCartList();
    this.updateTotalAmount();
  }

  updateCartAmount(cart: Product): void {
    if (cart.amount <= 0) this.deleteFromCart(cart);
    this.updateTotalAmount();
  }

  deleteFromCart(cart: Product): void {
    this.cartList = this.cartService.deleteFromCart(cart);
    alert(`${cart.name} will be removed from the cart`);
  }

  updateTotalAmount(): void {
    this.totalAmount = 0;
    this.cartList.map((cart) => (this.totalAmount += cart.price * cart.amount));
  }

  confirmOrder(): void {
    this.confirmed = true;
    this.cartService.clearCartList();
    this.cartList = [];
  }
}

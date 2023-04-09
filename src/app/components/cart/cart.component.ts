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

  updateTotalAmount(): void {
    this.cartList.map((cart) => (this.totalAmount += cart.price * cart.amount));
  }
}

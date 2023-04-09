import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      data.forEach((product) => {
        product.amount = 1;
      });
      this.products = data;
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(
      `${product.amount} items of "${
        product.name
      }" was added to your cart with price $${product.price * product.amount}`
    );
  }
}

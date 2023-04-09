import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product: Product = new Product();
  amountList: number[] = [];

  constructor(
    private router: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getProduct();
    this.amountList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  getProduct(): void {
    const id: number = Number(this.router.snapshot.paramMap.get('id'));
    this.productService.getProducts().subscribe((products) => {
      this.product = products.find((product) => product.id === id)!;
      this.product.amount = 1;
    });
    console.log(this.product);
  }

  addToCart(): void {
    this.cartService.addToCart(this.product);
    alert(
      `${this.product.amount} items of "${
        this.product.name
      }" was added to your cart with price $${
        this.product.price * this.product.amount
      }`
    );
  }
}

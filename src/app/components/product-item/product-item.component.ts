import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product = new Product();
  @Output() addProduct: EventEmitter<Product> = new EventEmitter();

  amountList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  addToCart(product: Product) {
    this.addProduct.emit(product);
  }
}

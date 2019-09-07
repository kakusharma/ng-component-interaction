import { Injectable, EventEmitter } from '@angular/core';
import { Product } from './products/products.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartUpdated = new EventEmitter<Product>();

  constructor() { }

  addProduct(product: Product) {
    this.cartUpdated.emit(product);
  }
}

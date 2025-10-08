import { Component } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {
   cart: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.updateCart();
  }

  updateCart() {
    this.cart = this.cartService.getCart();
  }

  inc(item: any) {
    this.cartService.increaseQuantity(item.id, item.selectedSize);
    this.updateCart();
  }

  desc(item: any) {
    this.cartService.decreaseQuantity(item.id, item.selectedSize);
    this.updateCart();
  }

  remove(item: any) {
    this.cartService.removeFromCart(item.id, item.selectedSize);
    this.updateCart();
  }

  get subtotal(): number {
    return this.cartService.getTotal()
  }

}

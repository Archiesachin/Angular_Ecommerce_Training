import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  getCart(): any[] {
    return this.cart;
  }

  addToCart(product: any, size: string) {
    const existing = this.cart.find(
      item => item.id === product.id && item.selectedSize === size
    );
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({ ...product, selectedSize: size, quantity: 1 });
    }
  }

  increaseQuantity(productId: any, size: string) {
    const item = this.cart.find(
      item => item.id === productId && item.selectedSize === size
    );
    if (item) {
      item.quantity += 1;
    }
  }

  decreaseQuantity(productId: any, size: string) {
    const item = this.cart.find(
      item => item.id === productId && item.selectedSize === size
    );
    if (item) {
      item.quantity -= 1;
      if (item.quantity < 1) {
        this.removeFromCart(productId, size);
      }
    }
  }

  removeFromCart(productId: any, size: string) {
    this.cart = this.cart.filter(
      item => !(item.id === productId && item.selectedSize === size)
    );
  }

  getTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  }

  clearCart() {
    this.cart = [];
  }
}

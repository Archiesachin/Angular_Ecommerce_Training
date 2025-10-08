import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart-service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CartComponent {  
 cart: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.refreshCart();
  }

  refreshCart(){
    this.cart = this.cartService.getCart()
  }

  inc(item: any) {
    this.cartService.increaseQuantity(item.id, item.selectedSize);
    this.refreshCart()
  }

  desc(item: any) {
    this.cartService.decreaseQuantity(item.id, item.selectedSize);
    this.refreshCart()
  }

  remove(item: any) {
    this.cartService.removeFromCart(item.id, item.selectedSize);
    this.refreshCart()
  }

  get subtotal(): number {
    return this.cartService.getTotal()
  }
}

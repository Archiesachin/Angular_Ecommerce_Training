import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart-service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule]
})
export class CartComponent {  
 cart: any[] = [];

 recommendedProducts: any[] = [
  {
    id: 201,
    product_name: 'Anytime No Show Sock',
    image: '/images/mens/womenshoe.png',
    price: 9,
    original_price: 14,
    sizes: ['Size: M (W8-9)', 'Size: S (W5-7)'],
    selectedSize: ''
  },
  {
    id: 202,
    product_name: 'Soft Merino Tee',
    image: '/images/mens/A12113_25Q3_Anytime_Soft_Merino_Tee_Deep_Navy_PDP_F-2000x2000.png',
    price: 12,
    original_price: 18,
    sizes: ['Size: L (M10-12)', 'Size: M (M8-9)'],
    selectedSize: ''
  },
  {
    id: 203,
    product_name: 'Stormy Grey Shoes',
    image: '/images/mens/A10868_24Q3_Courier_Stormy_Grey_Medium_Grey_Barely_Grey_PDP_LEFT-2000x2000.png',
    price: 7,
    original_price: 11,
    sizes: ['Size: S (W5-7)', 'Size: M (W8-9)'],
    selectedSize: ''
  }
];

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

  addToCart(product: any, size: string) {
  if (!size) {
    alert('Please select a size');
    return;
  }
  const cartProduct = {
    ...product,
    images: product.images ? product.images : [product.image],
    selectedSize: size
  };
  this.cartService.addToCart(cartProduct, size);
  this.refreshCart();
}
}

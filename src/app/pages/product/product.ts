import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NewData } from '../../services/new-data';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {

  product: any;
  loading = true;
  selectedImage: string | null = null;
   selectedSize = '5';



  constructor(
    private route: ActivatedRoute, 
    private dataService: NewData,
    private cartService: CartService, 
    private router: Router   
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const type = this.route.snapshot.paramMap.get('type');
    let fetchProduct$;

    if (type === 'new-arrival') {
      fetchProduct$ = this.dataService.getProductByIdFromNewArrivals(id!);
    } else if (type === 'mens') {
      fetchProduct$ = this.dataService.getProductByIdFromMens(id!);
    } else if (type === 'women') {
      fetchProduct$ = this.dataService.getProductByIdFromWomens(id!);
    }

    if (fetchProduct$) {
      fetchProduct$.subscribe(product => {
        this.product = product;
        this.loading = false;
        // Set default selected image
        if (product && product.images && product.images.length > 0) {
          this.selectedImage = product.images[0];
        } else {
          this.selectedImage = null;
        }
      });
    } else {
      this.loading = false;
    }
  }

  onSelectImage(image: string) {
    this.selectedImage = image;
  }

   sizes: string[] = [
    '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '11'
  ];

  handleSizeChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedSize = target.value;
  }

   addToCart() {
    if (!this.selectedSize) {
      alert('Please select a size');
      return;
    }

    this.cartService.addToCart(this.product, this.selectedSize);
    this.router.navigate(['/cart']);
  }

 

  

}

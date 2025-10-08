import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewData} from '../../services/new-data'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mens',
  imports: [CommonModule, RouterModule],
  templateUrl: './mens.html',
  styleUrl: './mens.css'
})
export class Mens {

  products: any[] = [];
  
    constructor(private NewData: NewData) {}
  
    selectedVariantIndexes: { [productId: number]: number } = {};
  
    ngOnInit() {
      this.NewData.getMensData().subscribe(data => {
        this.products = data;
        // Initialize selected variants to the first for each product
        this.products.forEach(product => {
          this.selectedVariantIndexes[product.id] = 0;
        });
      });
    }
  
    onColorSelect(productId: number, variantIndex: number) {
      this.selectedVariantIndexes[productId] = variantIndex;
    }
  
    getSelectedVariant(product: any): any {
      const index = this.selectedVariantIndexes[product.id] ?? 0;
      return product.variants ? product.variants[index] : product.variants?.[0];
    }

}

import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewData } from '../../services/new-data';




@Component({
  standalone: true,
  imports:[CommonModule],
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.html',
  styleUrl: './new-arrival.css'
})
export class NewArrival {

  products: any[] = [];

  constructor(private NewData: NewData) {}

  selectedVariantIndexes: { [productId: number]: number } = {};

  ngOnInit() {
    this.NewData.getJsonData().subscribe(data => {
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


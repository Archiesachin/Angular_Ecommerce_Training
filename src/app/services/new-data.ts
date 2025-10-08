import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , map} from 'rxjs';

@Injectable({providedIn: 'root'})
export class NewData {

  constructor(private http: HttpClient) {}

  getJsonData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/new_products');
  }

  getMensData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3001/mens-product')
  }

  getWomensData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3002/women-products')
  }

    getProductByIdFromNewArrivals(id: string): Observable<any | undefined> {
    return this.getJsonData().pipe(
      map(products => products.find(product => product.id === id))
    );
  }

  getProductByIdFromMens(id: string): Observable<any | undefined> {
    return this.getMensData().pipe(
      map(products => products.find(product => product.id === id))
    );
  }

  getProductByIdFromWomens(id: string): Observable<any | undefined> {
    return this.getWomensData().pipe(
      map(products => products.find(product => product.id === id))
    );
  }
  
}

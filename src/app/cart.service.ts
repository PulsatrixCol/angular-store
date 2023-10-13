import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = []; //items vacios
  constructor(private http: HttpClient) {
    /// Preguntar si items existe en localStorage, si existe
    /// crear items desde el localStorage, no olvide usar JSON.parse()
    /// si no existe, crear items vacios
   }

  addToCart(product: Product) {
    this.items.push(product)
    ////Guardar usando localStorage.setItem('items',JSON.stringify(this.items))
  }

  getItems() {
    return this.items
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>
    ('/assets/shipping.json')
  }




}

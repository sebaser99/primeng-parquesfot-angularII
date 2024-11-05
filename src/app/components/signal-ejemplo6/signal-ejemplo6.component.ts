import { Component, computed, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

interface Product {
  id: number;
  name: string;
  price: number;
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'MOTO RX', price: 2500 },
  { id: 2, name: 'HUAWEI 18', price: 800 },
  { id: 3, name: 'AIR POD 3', price: 1300 },
  { id: 4, name: 'ASUS PC 9', price: 3000 },
  { id: 5, name: 'MOTICICLETA 13', price: 4500 },
];

@Component({
  selector: 'app-signal-ejemplo6',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './signal-ejemplo6.component.html',
  styleUrl: './signal-ejemplo6.component.css'
})
export class SignalEjemplo6Component {
  products = signal(PRODUCTS);

  cart = signal<Product[]>([]);

  totalPrice = computed(() => {
    return this.cart().reduce((acc, curr) => acc + curr.price, 0);
  });

  selectedProductsIds = computed(() => {
    return this.cart().map((product) => product.id);
  });

  addToCart(product: Product) {
    this.cart.update((products) => {
      return [...products, product];
    });
  }

  removeFromCart(product: Product) {
    this.cart.update((products) => {
      return products.filter((pro) => pro.id !== product.id);
    });
  }
}

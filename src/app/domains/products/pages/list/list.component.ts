import {Component, inject, signal} from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from "@angular/common";
import { Product } from "../../../shared/models/product.model";
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { CartService } from "../../../shared/services/cart.service";
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  private cartService = inject(CartService);
  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=21'
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 50,
        image: 'https://picsum.photos/640/640?r=22'
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23'
      },
      {
        id: Date.now(),
        title: 'Pro 4',
        price: 50,
        image: 'https://picsum.photos/640/640?r=24'
      },
      {
        id: Date.now(),
        title: 'Pro 5',
        price: 100,
        image: 'https://picsum.photos/640/640?r=25'
      },
      {
        id: Date.now(),
        title: 'Pro 6',
        price: 50,
        image: 'https://picsum.photos/640/640?r=26'
      }
    ];
    this.products.set(initProducts);
  }
  addToCart(product: Product){
    this.cartService.addToCart(product);
  }
}

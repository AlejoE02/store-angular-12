import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../../shared/models/product.model";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) product!: Product;
  @Output() addToCart = new EventEmitter();

  addToCartHandler(){
    console.log('click on the button form the child');
    this.addToCart.emit(this.product);
  }
}
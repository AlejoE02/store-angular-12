import {Component, Input, signal, SimpleChanges} from '@angular/core';
import {Product} from "../../models/product.model";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  total = signal(0)
  @Input({required: true}) cart: Product[] = [];

  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }

  ngOnChanges(changes: SimpleChanges){
    const cart = changes['cart'];
    if(cart){
      this.total.set(this.calcTotal());
    }
  }

  calcTotal(){
    return this.cart.reduce((total, product) => total + product.price, 0)
  }

}

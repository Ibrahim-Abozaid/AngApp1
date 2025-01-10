import { Component, Input } from '@angular/core';
import { Product } from '../products/products.component';
@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() product!: Product;
}

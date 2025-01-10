import { Component } from '@angular/core';
import { RecomendedproductsComponent } from '../recomendedproducts/recomendedproducts.component';
import { CardComponent } from '../card/card.component';

export interface Product {
  name: string;
  price: number;
  cat: string;
  image: string;
}

@Component({
  selector: 'app-products',
  imports: [RecomendedproductsComponent, CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  productList: Product[] = [
    {
      name: 'samsung',
      price: 8000,
      cat: 'mobile',
      image: 'images/samsung.jpeg',
    },
    { name: 'hp', price: 8000, cat: 'laptop', image: 'images/laptop.jpg' },
    { name: 'samsung', price: 8000, cat: 'screen', image: 'images/screen.jpg' },
    { name: 'iphone', price: 8000, cat: 'mobile', image: 'images/iphone.jpg' },
    {
      name: 'samsung',
      price: 8000,
      cat: 'mobile',
      image: 'images/samsung.jpeg',
    },
    { name: 'hp', price: 8000, cat: 'laptop', image: 'images/laptop.jpg' },
    { name: 'samsung', price: 8000, cat: 'screen', image: 'images/screen.jpg' },
    { name: 'iphone', price: 8000, cat: 'mobile', image: 'images/iphone.jpg' },
  ];
}

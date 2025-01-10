import { Component } from '@angular/core';
import { Product } from '../products/products.component';
@Component({
  selector: 'app-recomendedproducts',
  imports: [],
  templateUrl: './recomendedproducts.component.html',
  styleUrl: './recomendedproducts.component.css'
})
export class RecomendedproductsComponent {
  list : Product[] = [
    { name: 'samsung', price: 8000, cat: 'mobile', image: 'images/samsung.jpeg' },
    { name: 'hp', price: 8000, cat: 'laptop', image: 'images/laptop.jpg' },
    { name: 'samsung', price: 8000, cat: 'screen', image: 'images/screen.jpg' },
    { name: 'iphone', price: 8000, cat: 'mobile', image: 'images/iphone.jpg' },
    { name: 'samsung', price: 8000, cat: 'mobile', image: 'images/samsung.jpeg' },
    { name: 'hp', price: 8000, cat: 'laptop', image: 'images/laptop.jpg' },
    { name: 'samsung', price: 8000, cat: 'screen', image: 'images/screen.jpg' },
    { name: 'iphone', price: 8000, cat: 'mobile', image: 'images/iphone.jpg' },
  ]

}

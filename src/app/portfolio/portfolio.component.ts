import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  images: string[] = [
    'images/poert1.png',
    'images/port2.png',
    'images/port3.png',
    'images/poert1.png',
    'images/port2.png',
    'images/port3.png',
  ];

  currentImage: string = '';
}

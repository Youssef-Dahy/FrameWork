import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  flag: boolean = true;
  modelImg: string = '';
  srcs: string[] = [
    'assets/images/poert1.jpg',
    'assets/images/port2.jpg',
    'assets/images/port3.jpg',
    'assets/images/poert1.jpg',
    'assets/images/port2.jpg',
    'assets/images/port3.jpg',
  ];

  hideModel(element: EventTarget | null, img: HTMLImageElement): void {
    if (element == img) return;

    this.flag = true;
  }
}

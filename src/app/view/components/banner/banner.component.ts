import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  images: string[] = [
    'assets/banners/background_table.webp',
    'assets/banners/imagen_2.jpg',
  ];
  currentIndex: number = 0;
  titles: string[] = ['Reservas para el día de la madre', '', ''];
  subtitles: string[] = ['', '', ''];

  ngOnInit(): void {
    setInterval(() => {
      this.nextImage();
    }, 15000);
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previousImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}

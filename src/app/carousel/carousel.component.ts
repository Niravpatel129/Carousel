import { Component, Input, OnInit } from '@angular/core';
import carouselImage from 'src/types/carouselImages';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() images: carouselImage[] = [];
  @Input() indicators = true;
  selectedIndex = 0;

  selectImage(index: number) {
    this.selectedIndex = index;
  }

  constructor() {}

  ngOnInit(): void {}
}

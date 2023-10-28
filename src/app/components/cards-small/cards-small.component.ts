import { Component, Input, OnInit } from '@angular/core';
import { data } from 'src/app/data/dataFake';

@Component({
  selector: 'app-cards-small',
  templateUrl: './cards-small.component.html',
  styleUrls: ['./cards-small.component.css'],
})
export class CardsSmallComponent implements OnInit {
  @Input()
  public title: string = '';
  smallCardImages: string[] = []; //data.slice(1, 7).map((item) => item.img);

  constructor() {}

  ngOnInit(): void {
    const startIndex = 1;
    this.smallCardImages = this.getRandomImages(data.slice(startIndex), 6);
  }

  getRandomImages(data: any[], count: number): string[] {
    const randomImages = [];

    const dataLength = data.length;

    const usedIndex = new Set<number>();

    while (randomImages.length < count) {
      const randomIndex = Math.floor(Math.random() * dataLength);

      //verifica se o index ja foi usado
      if (!usedIndex.has(randomIndex)) {
        usedIndex.add(randomIndex);
        randomImages.push(data[randomIndex].img);
      }
    }
    return randomImages;
  }
}

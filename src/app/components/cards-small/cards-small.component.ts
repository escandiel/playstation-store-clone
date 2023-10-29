import { Component, Input, OnInit } from '@angular/core';
import { data } from 'src/app/data/dataFake';
import { Faker, fakerDE as faker } from '@faker-js/faker';

@Component({
  selector: 'app-cards-small',
  templateUrl: './cards-small.component.html',
  styleUrls: ['./cards-small.component.css'],
})
export class CardsSmallComponent implements OnInit {
  @Input()
  public title: string = '';
  @Input()
  public showPriceSpan: boolean = false;
  @Input()
  public isFreeGame: boolean = false;
  public priceSpan: string[] = [];
  smallCardImages: string[] = [];

  constructor() {}

  ngOnInit(): void {
    const startIndex = 1;
    this.smallCardImages = this.getRandomImages(data.slice(startIndex), 6); //Instancia de smallcard recebe a lõgica da func getRandomImages
    this.priceSpan = this.getMarketPrices(6);
  }

  getRandomImages(data: any[], count: number): string[] {
    const randomImages = []; //Cria um array vazio do tipo any

    const dataLength = data.length; //Constante recebe a length de data

    const usedIndex = new Set<number>(); //Constante recebe um Set do tipo number

    while (randomImages.length < count) {
      const randomIndex = Math.floor(Math.random() * dataLength); //Atribui um Index randomico a const

      //verifica se o index ja foi usado
      if (!usedIndex.has(randomIndex)) {
        usedIndex.add(randomIndex);
        randomImages.push(data[randomIndex].img);
      }
    }
    return randomImages;
  }

  getMarketPrices(count: number): string[] {
    const values: string[] = [];
    for (let i = 0; i < count; i++) {
      const isMarketPrice = Math.random() < 0.5;

      if (isMarketPrice) {
        values.push('R$ ' + faker.commerce.price());
      } else {
        values.push('Gratuito');
      }
    }
    return values;
  }
}

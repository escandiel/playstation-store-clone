import { Component, HostListener, Input, OnInit } from '@angular/core';
import { data } from 'src/app/data/dataFake';
import { Faker, fakerDE as faker } from '@faker-js/faker';

@Component({
  selector: 'app-cards-small',
  templateUrl: './cards-small.component.html',
  styleUrls: ['./cards-small.component.css'],
})
export class CardsSmallComponent implements OnInit {
  @Input()
  public title: string = ''; //title do component inputavel
  @Input()
  public showPriceSpan: boolean = false; //Define se o priceSpan deve ser mostrado
  @Input()
  public isFreeGame: boolean = false; //Define se o jogo é gratuito
  public priceSpan: string[] = []; //Array para guardar preços ou "gratuito"
  public smallCardImages: string[] = []; // Array para armazenar URLs das imagens
  public numberOfCardsToDisplay: number = 6; //Numero padrao de cards para exibiçao

  constructor() {}

  ngOnInit(): void {
    const startIndex = 1;
    this.updateNumCards(); //Atualiza o num de cards com base no tamanho da tela

    this.smallCardImages = this.getRandomImages(
      data.slice(startIndex),
      this.numberOfCardsToDisplay
    ); //Obtem imagens aleatorias para os cards
    this.priceSpan = this.getMarketPrices(this.numberOfCardsToDisplay);
  }

  //Atualiza numero cards com base no tamanho da tela
  updateNumCards() {
    if (window.innerWidth >= 1400) {
      this.numberOfCardsToDisplay = 6;
    } else if (window.innerWidth <= 1400) {
      this.numberOfCardsToDisplay = 4;
    } else {
      this.numberOfCardsToDisplay = 2;
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.updateNumCards(); //Chama a func de atualizaçao ao redimensionar
  }

  //Obtem imagens aleatorias dos cards a partirs dos dados fornecidos
  getRandomImages(data: any[], count: number): string[] {
    const randomImages = []; //Cria um array vazio do tipo any

    const dataLength = data.length; //Constante recebe a length de data

    const usedIndex = new Set<number>(); //Constante recebe um Set do tipo number

    while (randomImages.length < count) {
      const randomIndex = Math.floor(Math.random() * dataLength); //Atribui um Index randomico a const randomIndex

      //verifica se o index ja foi usado
      if (!usedIndex.has(randomIndex)) {
        usedIndex.add(randomIndex);
        randomImages.push(data[randomIndex].img);
      }
    }

    return randomImages;
  }

  //gera preços aleatorios ou "gratuito" para os cards
  getMarketPrices(count: number): string[] {
    const values: string[] = []; //Array vazio para guardar os preços/gratuito
    for (let i = 0; i < count; i++) {
      //Loop para gerar preços para cada card
      const isMarketPrice = Math.random() < 0.5; //Gera um booleano aleatorio para decidir se é MarketPrice

      if (isMarketPrice) {
        values.push('R$ ' + faker.commerce.price()); //Se for MarketPrice, gera um preço aleatorio com o FakerJS
      } else {
        values.push('Gratuito');
      }
    }
    return values;
  }
}

import { Component, HostListener, Input, OnInit } from '@angular/core';
import { data } from 'src/app/data/dataFake';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  Id: string = '0';
  cardData: any;
  numCards: number = 8; //Define um valor padrao para o num de cards

  constructor() {}

  ngOnInit(): void {
    this.updateNumCards();
  }

  //Atualiza numero cards com base na screen size
  updateNumCards() {
    if (window.innerWidth < 1400) {
      this.numCards = 6;
    } else {
      this.numCards = 8;
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.updateNumCards();
  }

  generateArray(n: number): number[] {
    return Array(n)
      .fill(0)
      .map((x, i) => i);
  }

  getCardImage(id: number): string {
    if (id >= 0 && id < data.length) {
      return data[id].img;
    } else {
      return '';
    }
  }
}

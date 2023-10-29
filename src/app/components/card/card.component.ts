import { Component, HostListener, Input, OnInit } from '@angular/core';
import { data } from 'src/app/data/dataFake';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  Id: string = '0'; //Id do card, com valor padrao '0'
  cardData: any; //Dados do card
  numCards: number = 8; //Define um valor padrao para o num de cards

  constructor() {}

  ngOnInit(): void {
    this.updateNumCards(); //Inicializa o numero de cards com base no tamanho de tela
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
    this.updateNumCards(); //Ouvinte de eventos para mudanças de tela e atualiza a view
  }

  //Gera um array de números de 0 a n -1
  generateArray(n: number): number[] {
    return Array(n)
      .fill(0) //Preenche o array com 0
      .map((x, i) => i); //Swapa os valores com o indice 'i'
  }

  //Obtem a imagem do card com base no ID fornecido
  getCardImage(id: number): string {
    if (id >= 0 && id < data.length) {
      return data[id].img; //Retorna a URL da imagem com base no ID
    } else {
      return ''; //Retorna uma string vazia se o ID estiver fora do intervalo
    }
  }
}

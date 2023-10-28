import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css'],
})
export class TopHeaderComponent implements OnInit {
  @Input()
  isVisible: boolean = true;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    //Verifica a posicao de scroll e atualiza a view do top header
    if (window.scrollY > 100) {
      this.isVisible = false; //Esconde o top header apos scroll
    } else {
      this.isVisible = true; //Torna top header visivel novamente
    }
  }

  constructor() {}

  ngOnInit(): void {}
}

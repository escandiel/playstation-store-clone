import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  photoCover: string = '/assets/spider-man-2.png';

  constructor() {}

  ngOnInit(): void {}
}

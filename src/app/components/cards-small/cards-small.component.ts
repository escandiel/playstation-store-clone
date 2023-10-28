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
  smallCardImages: string[] = data.slice(1, 7).map((item) => item.img);

  constructor() {}

  ngOnInit(): void {}
}

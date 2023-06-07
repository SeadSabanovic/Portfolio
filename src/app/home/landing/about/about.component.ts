import { Component, OnInit } from '@angular/core';
import { MarqueeItem } from 'src/app/interfaces/marquee-item';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  clientSrc = 'assets/brands/';
  clientImgType = '.svg';

  clients: MarqueeItem[] = [
    {
      src: `${this.clientSrc}bmw${this.clientImgType}`,
      alt: 'bmw logo',
    },
    {
      src: `${this.clientSrc}rb${this.clientImgType}`,
      alt: 'redbull logo',
    },
    {
      src: `${this.clientSrc}vodafone${this.clientImgType}`,
      alt: 'vodafone logo',
    },
    {
      src: `${this.clientSrc}salewa${this.clientImgType}`,
      alt: 'salewa logo',
    },
    {
      src: `${this.clientSrc}swiss${this.clientImgType}`,
      alt: 'swiss logo',
    },
  ];

  constructor() {}

  ngOnInit() {}
}

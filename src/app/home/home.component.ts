import { AfterViewInit, Component } from '@angular/core';
import { MarqueeItem } from '../interfaces/marquee-item';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  iconsFolder = 'assets/icons/';
  brandsFolder = 'assets/brands/';
  assetType = '.svg';
  skills = [
    {
      src: this.iconsFolder + 'html' + this.assetType,
      alt: 'HTML 5',
    },
    {
      src: this.iconsFolder + 'css' + this.assetType,
      alt: 'CSS 3',
    },
    {
      src: this.iconsFolder + 'sass' + this.assetType,
      alt: 'SASS',
    },
    {
      src: this.iconsFolder + 'js' + this.assetType,
      alt: 'JavaScript',
    },
    {
      src: this.iconsFolder + 'vue' + this.assetType,
      alt: 'Vue.js',
    },
    {
      src: this.iconsFolder + 'nuxt' + this.assetType,
      alt: 'Nuxt.js',
    },
    {
      src: this.iconsFolder + 'angular' + this.assetType,
      alt: 'Angular',
    },
    {
      src: this.iconsFolder + 'php' + this.assetType,
      alt: 'PHP',
    },
    {
      src: this.iconsFolder + 'wp' + this.assetType,
      alt: 'WordPress',
    },
    {
      src: this.iconsFolder + 'mysql' + this.assetType,
      alt: 'MySQL',
    },
  ];

  clientSrc = 'assets/brands/';

  clients: MarqueeItem[] = [
    {
      src: `${this.clientSrc}bmw${this.assetType}`,
      alt: 'BMW',
    },
    {
      src: `${this.clientSrc}rb${this.assetType}`,
      alt: 'RedBull',
    },
    {
      src: `${this.clientSrc}vodafone${this.assetType}`,
      alt: 'Vodafone',
    },
    {
      src: `${this.clientSrc}salewa${this.assetType}`,
      alt: 'SALEWA',
    },
    {
      src: `${this.clientSrc}swiss${this.assetType}`,
      alt: 'Swissquote',
    },
  ];

  ngAfterViewInit() {
    const skills = document.querySelectorAll('.skills .skills__skill');
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(skills, {
      y: 50,
      ease: 'Power.3',
      autoAlpha: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: skills,
        start: 'center bottom',
        end: 'center center',
        scrub: 2,
      },
    });
  }
}

import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements AfterViewInit {
  projects = [
    {
      name: 'Angular Beats',
      src: 'assets/projects/baby.gif',
      link: 'https://www.yuh.com/en',
    },
    {
      name: 'Yuh',
      src: 'assets/projects/yuh.png',
      link: 'https://www.yuh.com/en',
    },
    {
      name: 'Coinpanion',
      src: 'assets/projects/coinpanion.jpg',
      link: 'https://en.coinpanion.com/',
    },
    {
      name: 'Black Moose Outposts',
      src: 'assets/projects/bm.jpg',
      link: 'https://www.blackmooseoutposts.com/en/',
    },
    {
      name: 'RedBull - Stratos',
      src: 'assets/projects/stratos.jpg',
      link: 'https://www.redbull.com/int-en/projects/red-bull-stratos',
    },
    {
      name: 'RedBull - Doodle Art',
      src: 'assets/projects/doodle.jpg',
      link: 'https://www.redbull.com/int-en/event-series/red-bull-doodle-art',
    },
    {
      name: 'RedBull - Campus Clutch',
      src: 'assets/projects/clutch.jpg',
      link: 'https://www.redbull.com/int-en/event-series/red-bull-campus-clutch-2022',
    },
    {
      name: 'Salewa',
      src: 'assets/projects/salewa.jpg',
      link: 'https://ortles.salewa.com/',
    },
    {
      name: 'Saloopo',
      src: 'assets/projects/saloopo.avif',
      link: 'https://saloopo.com/',
    },
  ];

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    const projects = document.querySelectorAll('.projects__project');
    gsap.from(projects, {
      y: 50,
      ease: 'Power.3',
      autoAlpha: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: projects,
        start: 'center bottom',
        end: 'center center',
        scrub: 2,
      },
    });
  }
}

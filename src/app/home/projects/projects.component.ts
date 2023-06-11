import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: 'Yuh',
      src: 'assets/projects/yuh.png',
      link: 'https://www.yuh.com/en',
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
    {
      name: 'Color-Clinic',
      src: 'assets/projects/clinic.jpg',
      link: 'https://color-clinic.com/',
    },
  ];

  constructor() {}

  ngOnInit() {}
}

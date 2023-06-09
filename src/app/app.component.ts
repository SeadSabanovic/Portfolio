import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fade } from './animations/fade';
import { routerFade } from './animations/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade, routerFade],
})
export class AppComponent implements OnInit, AfterViewInit {
  scroll: any;
  isLoading = false;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const mouse = document.querySelector('.mouse'),
      duration = 0.6,
      xTo = gsap.quickTo(mouse, 'x', { duration: duration, ease: 'power3' }),
      yTo = gsap.quickTo(mouse, 'y', { duration: duration, ease: 'power3' });

    gsap.set(mouse, { xPercent: -50, yPercent: -50 });
    gsap.to(mouse, {
      opacity: 1,
      duration: 2,
    });
    window.addEventListener('mousemove', (e: MouseEvent) => {
      xTo(e.x);
      yTo(e.y);
    });
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}

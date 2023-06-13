import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-mouse',
  template: '',
  styleUrls: ['./mouse.component.scss'],
})
export class MouseComponent implements AfterViewInit {
  isFirstMouseMove = true;

  constructor(private elementRef: ElementRef) {
    gsap.set(this.elementRef.nativeElement, {
      autoAlpha: 0,
    });
  }

  ngAfterViewInit() {
    const mouse = this.elementRef.nativeElement,
      duration = 0.6,
      xTo = gsap.quickTo(mouse, 'x', { duration: duration, ease: 'power3' }),
      yTo = gsap.quickTo(mouse, 'y', { duration: duration, ease: 'power3' });

    gsap.set(mouse, { xPercent: -50, yPercent: -50 });

    window.addEventListener('mousemove', (e: MouseEvent) => {
      if (this.isFirstMouseMove) {
        this.isFirstMouseMove = false;
        // Code to execute on the first mouse move event
        gsap.to(this.elementRef.nativeElement, {
          scale: 1,
          autoAlpha: 1,
          duration: 1,
        });
      } else {
        yTo(e.y);
        xTo(e.x);
      }
    });

    document.addEventListener('mouseleave', (e) => {
      this.isFirstMouseMove = true;
      gsap.to(this.elementRef.nativeElement, {
        scale: 0,
        duration: 0.3,
      });
    });
  }
}

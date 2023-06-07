import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements AfterViewInit {
  @ViewChild('sky', { static: false }) skyEl!: ElementRef;
  fogDuration = 20;
  fogEase = 'none';
  fogClass = '.fog';
  numberOfStars = 20;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    this.injectStars();
    this.cloudsAnimation();
  }

  injectStars() {
    for (let i = 0; i < this.numberOfStars; i++) {
      let star = document.createElement('div');
      star.classList.add('star');

      let widthAndHeight = this.random(5, 'px');
      star.style.height = star.style.width = widthAndHeight;

      star.style.left = this.random(100, '%');
      star.style.top = this.random(100, '%');

      this.skyEl.nativeElement.appendChild(star);

      const delay = Math.floor(Math.random() * 7) + 1;

      gsap.to(star, {
        duration: 2,
        opacity: 0.5,
        scale: 0.5,
        delay: delay,
        yoyo: true,
        repeat: -1,
      });
    }
  }

  cloudsAnimation() {
    const fogElements: NodeList = this.elRef.nativeElement.querySelectorAll(
      this.fogClass
    );

    fogElements.forEach((element, i) => {
      let fogTl = gsap.timeline({
        repeat: -1,
        defaults: {
          ease: this.fogEase,
        },
      });
      gsap.set(element, {
        left: `${-i * 40}%`,
      });
      fogTl
        .from(element, {
          opacity: 0,
        })
        .to(element, {
          duration: this.fogDuration,
          left: '+=110%',
        })
        .to(element, {
          duration: 0,
          left: `-110%`,
        })
        .to(element, {
          duration: this.fogDuration,
          left: `${i * 40}%`,
        })
        .to(element, {
          duration: this.fogDuration,
          left: '+=110%',
        });
    });
  }

  random(range: number, unit: string) {
    let randNum = Math.floor(Math.random() * range) + 1;
    return `${randNum}${unit}`;
  }
}

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements AfterViewInit {
  @ViewChild('sky', { static: false }) skyEl!: ElementRef;
  numberOfStars = 15;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    this.setParallax();
    this.injectStars();
    this.cloudsAnimation();
  }

  setParallax() {
    gsap.registerPlugin(ScrollTrigger);
    const mount1 = document.querySelector('.mountain--1');
    const mount2 = document.querySelector('.mountain--2');
    const divider = document.querySelector('.divider');
    const houses = document.querySelectorAll('.house');
    const headline = document.querySelectorAll('.headline');
    const floor = document.querySelector('.floor');


    gsap.to(headline, {
      top: '100%',
      scale: 0.4,
      rotate: 360,
      ease: 'power.3',
      scrollTrigger: {
        trigger: this.skyEl.nativeElement,
        start: 'center center',
        end: 'bottom top',
        scrub: 1,
      },
    });

    // Floor
    gsap.to(floor, {
      y: '10px',
      ease: 'none',
      scrollTrigger: {
        trigger: this.skyEl.nativeElement,
        start: 'center center',
        end: 'bottom top',
        scrub: 1,
      },
    });

    // Mountain 1
    gsap.to(mount1, {
      y: '20px',
      ease: 'none',
      scrollTrigger: {
        trigger: this.skyEl.nativeElement,
        start: 'center center',
        end: 'bottom top',
        scrub: 1,
      },
    });

    // Mountain 2
    gsap.to(mount2, {
      y: '50px',
      ease: 'none',
      scrollTrigger: {
        trigger: this.skyEl.nativeElement,
        start: 'center center',
        end: 'bottom top',
        scrub: 1,
      },
    });

    gsap.to(divider, {
      height: '40%',
      ease: 'none',
      scrollTrigger: {
        trigger: this.skyEl.nativeElement,
        start: 'center center',
        end: 'bottom top',
        scrub: 1,
      },
    });

    houses.forEach((house) => {
      gsap.to(house, {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: this.skyEl.nativeElement,
          start: 'center center',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });
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

      const delay = Math.floor(Math.random() * 4);

      gsap.to(star, {
        duration: 1,
        opacity: 0.5,
        scale: 0.5,
        delay: delay,
        yoyo: true,
        repeat: -1,
      });
    }
  }

  cloudsAnimation() {
    const fog = document.querySelectorAll('.fog');
    fog.forEach((fogEl, i) => {
      gsap.set(fogEl, {
        left: `-${(i + 2) * 100}%`,
      });
    });

    gsap.to(fog, {
      repeat: -1,
      ease: 'none',
      duration: 15,
      left: '120%',
    });
  }

  random(range: number, unit: string) {
    let randNum = Math.floor(Math.random() * range) + 1;
    return `${randNum}${unit}`;
  }
}

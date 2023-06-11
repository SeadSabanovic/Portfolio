import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  OnInit,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.scss'],
})
export class MarqueeComponent implements OnInit, AfterViewInit {
  @ViewChild('marqueeWrap') marqueeWrap: ElementRef;
  @ViewChildren('marqueeItem') marqueeItem: QueryList<ElementRef>;
  items: string[] = [];
  hostWidth: number;
  totalWidth: number;
  elWidth: number;
  animation: any;

  ngOnInit() {
    for (let i = 0; i < 10; i++) this.items.push('OPEN TO WORK');
  }

  ngAfterViewInit() {
    this.getHostWidth();
    this.animate();
  }

  getHostWidth() {
    const allElements = this.marqueeItem.length;
    this.elWidth = this.marqueeItem.first.nativeElement.offsetWidth;
    this.hostWidth = this.marqueeWrap.nativeElement.offsetWidth;
    this.totalWidth = this.elWidth * allElements;
  }

  animate() {
    this.animation = gsap.timeline();
    this.marqueeItem.forEach((itemRef: ElementRef, index: number) => {
      const item = itemRef.nativeElement;
      const mod = gsap.utils.wrap(
        -this.elWidth,
        this.totalWidth - this.elWidth
      );

      // Set the elements position
      gsap.set(item, {
        x: () => index * item.offsetWidth,
        top: '50%',
        y: '-50%',
      });

      gsap.to(item, {
        x: `+=${this.totalWidth}`,
        modifiers: {
          x: (x) => mod(parseFloat(x)) + 'px',
        },
        ease: 'none',
        duration: 40,
        repeat: -1,
        overwrite: 'auto',
        onComplete: () => gsap.set(item, { x: index * item.offsetWidth }), // Reset the x position on each repeat
      });
    });
  }
}

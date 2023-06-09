import {
  AfterViewInit,
  Component,
  Input,
  ElementRef,
  QueryList,
  ViewChildren,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MarqueeItem } from 'src/app/interfaces/marquee-item';
import { gsap } from 'gsap';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.scss'],
})
export class MarqueeComponent implements OnInit, AfterViewInit {
  @ViewChild('marqueeWrap') marqueeWrap: ElementRef;
  @ViewChildren('marqueeItem') marqueeItem: QueryList<ElementRef>;
  @Input() items: MarqueeItem[] = [];
  hostWidth: number;
  animation: any;

  constructor() {}

  ngOnInit() {
    this.items = [...this.items];
  }

  ngAfterViewInit() {
    this.getHostWidth();
    this.animate();
  }

  getHostWidth() {
    this.hostWidth = this.marqueeWrap.nativeElement.offsetWidth;
    // console.log(this.hostWidth);
  }

  animate() {
    this.animation = gsap.timeline();
    this.marqueeItem.forEach((itemRef: ElementRef, index: number) => {
      const item = itemRef.nativeElement;
      const mod = gsap.utils.wrap(0, this.hostWidth);

      // Set the elements position
      gsap.set(item, {
        x: () => index * item.offsetWidth,
        top: '50%',
        y: '-50%',
      });

      gsap.to(item, {
        x: `+=${this.hostWidth}`,
        modifiers: {
          x: (x) => mod(parseFloat(x)) + 'px',
        },
        ease: 'none',
        duration: 10,
        repeat: -1,
        overwrite: 'auto',
        onComplete: () => gsap.set(item, { x: index * item.offsetWidth }), // Reset the x position on each repeat
      });
    });
  }
}

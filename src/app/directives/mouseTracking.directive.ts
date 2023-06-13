import { Directive, HostListener } from '@angular/core';
import { MouseService } from '../services/mouse.service';

@Directive({
  selector: '[mouseTracking]',
})
export class MouseTrackingDirective {
  constructor(private ms: MouseService) {}

  @HostListener('mouseleave')
  onMouseLeave() {
    this.ms.setLastStatus('closed');
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.ms.setLastStatus('open');
  }
}

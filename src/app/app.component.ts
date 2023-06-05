import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fade } from './animations/fade';
import { routerFade } from './animations/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade, routerFade],
})
export class AppComponent {
  isLoading = false;

  constructor() {
    // setTimeout(() => (this.isLoading = false), 3000);
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}

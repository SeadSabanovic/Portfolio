import {
  Component,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fade } from './animations/fade';
import { routerFade } from './animations/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade, routerFade],
})
export class AppComponent implements OnInit, AfterViewInit {
  scroll: any;
  isLoading = false;

  constructor() {
    // setTimeout(() => (this.isLoading = false), 3000);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  getAnimationData(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}

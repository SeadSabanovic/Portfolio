import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
} from '@angular/animations';

export const routerFade = trigger('routerFade', [
  transition('* <=> *', [
    style({ opacity: 0 }),
    animate('300ms', style({ opacity: 1 })),
  ]),
]);

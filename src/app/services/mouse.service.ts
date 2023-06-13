import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MouseService {
  private lastStatusSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('closed');
  status$: Observable<string> = this.lastStatusSubject.asObservable();

  setLastStatus(status: string) {
    this.lastStatusSubject.next(status);
  }

  getLastStatus(): BehaviorSubject<string> {
    return this.lastStatusSubject;
  }
}

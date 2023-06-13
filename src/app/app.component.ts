import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  titles = ['✋', 'SEAD SABANOVIC', 'PORTFOLIO', 'OPEN 2 WORK', '😇'];
  currentIndex = 0;
  isMobile = false;

  constructor(private titleService: Title) {
    const userAgent = navigator.userAgent;
    this.isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );
  }

  ngOnInit(): void {
    this.changeTitle();
  }

  changeTitle() {
    setInterval(() => {
      this.titleService.setTitle(this.titles[this.currentIndex]);
      this.currentIndex++;
      if (this.currentIndex == this.titles.length) {
        this.currentIndex = 0;
      }
    }, 1000);
  }
}

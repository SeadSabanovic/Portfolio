import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './modules/routing.module';
import { MaterialModule } from './modules/material.module';
import { LandingComponent } from './home/landing/landing.component';
import { AssetComponent } from './home/landing/asset/asset.component';
import { SectionComponent } from './UI/section/section.component';
import { MarqueeComponent } from './UI/marquee/marquee.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { MouseComponent } from './UI/mouse/mouse.component';
import { MouseTrackingDirective } from './directives/mouseTracking.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    AssetComponent,
    SectionComponent,
    MarqueeComponent,
    ProjectsComponent,
    MouseComponent,
    MouseTrackingDirective,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

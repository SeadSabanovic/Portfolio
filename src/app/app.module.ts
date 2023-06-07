import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './modules/routing.module';
import { OverviewComponent } from './overview/overview.component';
import { LoaderComponent } from './UI/loader/loader.component';
import { NavigationComponent } from './UI/navigation/navigation.component';
import { MaterialModule } from './modules/material.module';
import { LandingComponent } from './home/landing/landing.component';
import { AssetComponent } from './home/landing/asset/asset.component';
import { SectionComponent } from './UI/section/section.component';
import { AboutComponent } from './home/landing/about/about.component';
import { MarqueeComponent } from './UI/marquee/marquee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    LoaderComponent,
    NavigationComponent,
    LandingComponent,
    AssetComponent,
    SectionComponent,
    AboutComponent,
    MarqueeComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './modules/router/routing.module';
import { OverviewComponent } from './overview/overview.component';
import { LoaderComponent } from './UI/loader/loader.component';
import { NavigationComponent } from './UI/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    LoaderComponent,
    NavigationComponent,
  ],
  imports: [BrowserModule, RoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

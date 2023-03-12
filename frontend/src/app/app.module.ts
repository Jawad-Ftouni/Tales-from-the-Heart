import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { HeaderTopComponent } from '../components/header-top/header-top.component';
import { MainSearchFormComponent } from '../components/main-search-form/main-search-form.component';
import { FeaturedPostsComponent } from '../components/featured-posts/featured-posts.component';
import { TravelComponent } from '../components/travel/travel.component';
import { DestinationComponent } from '../components/destination/destination.component';
import { FoodComponent } from '../components/food/food.component';
import { HotelsComponent } from '../components/hotels/hotels.component';
import { BlogComponent } from '../components/blog/blog.component';
import { ContactComponent } from '../components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HeaderTopComponent,
    MainSearchFormComponent,
    FeaturedPostsComponent,
    TravelComponent,
    DestinationComponent,
    FoodComponent,
    HotelsComponent,
    BlogComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

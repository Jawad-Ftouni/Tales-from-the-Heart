import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { HeaderTopComponent } from '../components/header-top/header-top.component';
import { MainSearchFormComponent } from '../components/main-search-form/main-search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HeaderTopComponent,
    MainSearchFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

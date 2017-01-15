import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BookshelfCarouselComponent } from './components/bookshelf-carousel/bookshelf-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    BookshelfCarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

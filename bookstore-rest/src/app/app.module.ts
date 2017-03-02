import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing }  from './app.routing';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BookshelfCarouselComponent } from './components/bookshelf-carousel/bookshelf-carousel.component';
import { BookListComponent } from './components/book-list/book-list.component';

import {GetBookListService} from './services/get-book-list.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    BookshelfCarouselComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot(),
  ],
  providers: [
    GetBookListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import {GetBookService} from './services/get-book.service';
import {DataTableModule} from "angular2-datatable";
import { DataFilterPipe }   from './components/book-list/data-filter.pipe';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    BookshelfCarouselComponent,
    BookListComponent,
    DataFilterPipe,
    BookDetailComponent,
    NewAccountComponent,
    LogInComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot(),
    DataTableModule
  ],
  providers: [
    GetBookListService,
    GetBookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

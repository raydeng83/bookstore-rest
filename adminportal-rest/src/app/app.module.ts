import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing }  from './app.routing';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import {LoginService} from './services/login.service';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import {UploadImageService} from "./services/upload-image.service";
import {AddBookService} from "./services/add-book.service";
import { BookListComponent } from './components/book-list/book-list.component';
import {GetBookListService} from "./services/get-book-list.service";
import { ViewBookComponent } from './components/view-book/view-book.component';
import {GetBookService} from "./services/get-book.service";
import { EditBookComponent } from './components/edit-book/edit-book.component';
import {EditBookService} from "./services/edit-book.service";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent,
    BookListComponent,
    BookListComponent,
    ViewBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    CookieService,
    LoginService,
    UploadImageService,
    AddBookService,
    GetBookListService,
    GetBookService,
    EditBookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

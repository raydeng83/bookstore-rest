import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Book} from "../../models/book";
import {GetBookListService} from "../../services/get-book-list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  private selectedBook : Book;
  private bookList: Book[];

  constructor(private getBookListService: GetBookListService, private router: Router) {
    this.getBookListService.getBookList().subscribe(
      res => {
        console.log(res.json());
        this.bookList=res.json();
      },
      err => {
        console.log(err);
      }
    );
  }

  onSelect(book:Book) {
    this.selectedBook = book;
    this.router.navigate(['/viewBook', this.selectedBook.id]);
  }

  ngOnInit() {

  }

}
